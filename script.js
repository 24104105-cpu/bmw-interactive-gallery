// Function for mouseover and focus events
function upDate(element) {

    console.log("upDate function was triggered.");

    const imageDiv = document.getElementById("image");

    // Display the alt text
    imageDiv.innerHTML = element.alt;

    // Display the selected image as the background
    imageDiv.style.backgroundImage = "url('" + element.src + "')";
}


// Function for mouseout and blur events
function unDo() {

    console.log("unDo function was triggered.");

    const imageDiv = document.getElementById("image");

    // Return to the original message
    imageDiv.innerHTML = "Hover over an image below to display here.";

    // Remove the background image
    imageDiv.style.backgroundImage = "none";
}


// Function that runs when the page loads
function initializeGallery() {

    console.log("Page loaded. Initializing gallery...");

    // Get all images in the gallery
    const images = document.querySelectorAll(".gallery img");

    console.log("Number of images:", images.length);

    // Add tabindex to every image
    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        console.log("Added tabindex to image:", i + 1);
    }
}