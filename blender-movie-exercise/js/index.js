let data;

(async function(){
    const videoResponse = await fetch("https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0");
    const videoJsonData = await videoResponse.json();
    console.log(videoJsonData);

    const posterResponse = await fetch("https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346");
    const posterJsonData = await posterResponse.json();
    console.log(posterJsonData);

    let video = $("<video>");
    video.attr("src", videoJsonData.videoUrl);
    video.attr("controls", true);
    video.attr("poster", "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg");
    $(".movie-display-container").append(video);

    let movieDetailsDiv = $("<div>");
    movieDetailsDiv.attr("class", "movie-details");
    $(".movie-display-container").append(movieDetailsDiv);

    let movieTitle = $("<p>");
    movieTitle.attr("class", "movie-title");
    movieTitle.html(videoJsonData.title);
    $(".movie-details").append(movieTitle);

    let movieDesc = $("<p>");
    movieDesc.attr("class", "movie-description");
    movieDesc.html(videoJsonData.description);
    $(".movie-details").append(movieDesc);

    let horizontalLine = $("<div>");
    horizontalLine.attr("class", "horizontal-line");
    $(".movie-display-container").append(horizontalLine);

    let movieComments = $("<div>");
    movieComments.attr("class", "movie-comments");
    $(".movie-display-container").append(movieComments);

    let commnetsHeading = $("<h3>");
    commnetsHeading.html("Comments");
    movieComments.append(commnetsHeading);

    for(let comments of videoJsonData.comments) {
        // console.log(comments);
        let reviewer = $("<div>");
        reviewer.attr("class", "reviewer");
        movieComments.append(reviewer);

        let reviewerImage = $("<img>");
        reviewerImage.attr("src", comments.image);
        reviewerImage.attr("alt", "Image of "+comments.name);
        reviewer.append(reviewerImage);

        let reviewerDetails = $("<div>");
        reviewerDetails.attr("class", "reviewer-details");
        reviewer.append(reviewerDetails);

        let reviewerName = $("<h5>");
        reviewerName.attr("class", "reviewer-name");
        reviewerName.html(comments.name);
        reviewerDetails.append(reviewerName);

        let review = $("<p>");
        review.attr("class", "review");
        review.html(comments.comment);
        reviewerDetails.append(review);
    }

    let upcomingHeading = $("<h3>");
    upcomingHeading.html("Upcoming Projects")
    $(".upcoming-movies").append(upcomingHeading);

    let upcomingProjectsImages = $("<div>");
    upcomingProjectsImages.attr("class", "upcoming-movies-images");
    $(".upcoming-movies").append(upcomingProjectsImages);

    for(let posters of posterJsonData) {
        let posterImage = $("<img>");
        posterImage.attr("src", posters.imageUrl);
        posterImage.attr("alt", posters.title);
        upcomingProjectsImages.append(posterImage);
    }
})();