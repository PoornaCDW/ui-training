fetch("/blender-movie-exercise/assets/video.json")
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })