// ------------------------------------------------------------------------------
// RENDER SPACEX IMAGE GALLERY
// ------------------------------------------------------------------------------

// Function to fetch SpaceX launch images from the SpaceX API
async function fetchSpaceXImages() {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches/past");
    const launches = await response.json();

    // Filter launches with images
    const launchesWithImages = launches.filter(
      (launch) => launch.links.flickr.original.length > 0
    );
    // console.log(launchesWithImages);
    return launchesWithImages;
  } catch (error) {
    console.error("Error fetching SpaceX images:", error);
  }
}

// Function to display SpaceX launch images in the gallery
function displaySpaceXImages(images) {
  const galleryElement = document.getElementById("spacex-gallery");

  if (galleryElement) {
    // galleryElement.innerHTML = '';

    images.forEach((launch) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("img-wrapper");
      const imageElement = document.createElement("img");
      // Using the first image link from Flickr
      imageElement.src = launch.links.flickr.original[0];
      imageElement.alt = `SpaceX Launch ${launch.name}`;

      galleryItem.appendChild(imageElement);
      galleryElement.appendChild(galleryItem);
    });
  }
}

// Fetch SpaceX launch images and display them in the gallery
fetchSpaceXImages().then((images) => {
  displaySpaceXImages(images);
});


// ------------------------------------------------------------------------------
// RENDER MARS ROVER IMAGE GALLERY
// ------------------------------------------------------------------------------

const marsRoverAPI = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"

const marsRoverAPICamera = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY"

const marsRoverAPIPage = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY"

// Fetch images from the Mars Rover API
fetch(marsRoverAPI)
  .then(response => response.json())
  .then(data => {
    const galleryElement = document.getElementById("mars-rover-gallery");
    const images = data.photos;

    // Create image elements and append them to the container
    images.forEach(image => {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("img-wrapper");
        const imgElement = document.createElement("img");

        imgElement.src = image.img_src;
        imgElement.alt = `Mars image from Curiosity rover`;
        // imageContainer.appendChild(imgElement);

        galleryItem.appendChild(imgElement);
        galleryElement.appendChild(galleryItem);
    });
  })
  .catch(error => {
    console.error("Error fetching images:", error);
    // Handle errors gracefully, e.g., display an error message to the user
  });

// ------------------------------------------------------------------------------
// RENDER NASA IMAGE GALLERY
// ------------------------------------------------------------------------------
