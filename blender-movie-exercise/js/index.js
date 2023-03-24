/* Importing the json files into the javascript file. */
import videoJsonContent from "/blender-movie-exercise/js/video.json" assert { type: "json" };
import posterJsonContent from "/blender-movie-exercise/js/posters.json" assert { type: "json" };

// console.log(videoJsonContent);
// console.log(posterJsonContent);

let movieDisplayContainer = document.getElementById("movieDisplayContainer");
let upcomingProjects = document.getElementById("upcomingProjects");

/* A self-invoking function for the left container */
(function() {
    let video = document.createElement("video");
    video.src = videoJsonContent.videoUrl;
    video.poster = videoJsonContent.poster;
    video.controls = true;
    movieDisplayContainer.append(video);

    let movieDetails = document.createElement("div");
    movieDetails.className = "movie-details";
    movieDisplayContainer.append(movieDetails);

    let movieTitle = document.createElement("p");
    movieTitle.className = "movie-title";
    movieTitle.innerHTML = videoJsonContent.title;
    movieDetails.appendChild(movieTitle);

    let movieDescription = document.createElement("d");
    movieDescription.className = "movie-description";
    movieDescription.innerHTML = videoJsonContent.description;
    movieDetails.appendChild(movieDescription);

    let horizontalLine = document.createElement("div");
    horizontalLine.className = "horizontal-line";
    movieDisplayContainer.appendChild(horizontalLine);

    let movieCommentsContainer = document.createElement("div");
    movieCommentsContainer.className = "movie-comments";
    movieDisplayContainer.appendChild(movieCommentsContainer);

    let movieCommentsHeading = document.createElement("h3");
    movieCommentsHeading.innerHTML = "Comments";
    movieCommentsContainer.appendChild(movieCommentsHeading);

    // Creating a data fragment for the reviews
    let reviewContainerDataFragment = document.createDocumentFragment();

    for(let comments of videoJsonContent.comments) {
        console.log(comments.image);
        let reviewerContainer = document.createElement("div");
        reviewerContainer.className = "reviewer";

        let reviewerImage = document.createElement("img");
        reviewerImage.src = comments.image;
        reviewerImage.alt = comments.name;
        reviewerContainer.appendChild(reviewerImage);

        let reviewerDetails = document.createElement("div");
        reviewerDetails.className = "reviewer-details";
        reviewerContainer.appendChild(reviewerDetails);

        let reviewerName = document.createElement("h5");
        reviewerName.className = "reviewer-name";
        reviewerName.innerHTML = comments.name;
        reviewerDetails.appendChild(reviewerName);
        
        let review = document.createElement("p");
        review.className = "review";
        review.innerHTML = comments.comment;
        reviewerDetails.appendChild(review);

        reviewContainerDataFragment.appendChild(reviewerContainer);
    }

    // Pushing the whole datafragment containing all the reviews to the container
    movieCommentsContainer.appendChild(reviewContainerDataFragment);

    let upcomingProjectsTitle = document.createElement("h3");
    upcomingProjectsTitle.innerHTML = "Upcoming Projects";
    upcomingProjects.appendChild(upcomingProjectsTitle);

    let upcomingMoviesImages = document.createElement("div");
    upcomingMoviesImages.className = "upcoming-movies-images";

    // Creating a data fragment for the posters
    let posterImageDataFragment = document.createDocumentFragment();

    for(let posters of posterJsonContent) {
        let posterImage = document.createElement("img");
        posterImage.src = posters.imageUrl;
        posterImage.alt = posters.title;
        
        posterImageDataFragment.appendChild(posterImage);
    }

    // Pushing the whole datafragment containing all the posters to the container
    upcomingMoviesImages.appendChild(posterImageDataFragment);
    
    upcomingProjects.appendChild(upcomingMoviesImages);
})();