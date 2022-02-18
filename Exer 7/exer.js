image_array = [
  "1.jpg",
  "2.jpg",
  "3.png",
  "4.png",
  "5.jpg",
  "6.png",
  "7.jpg"
]

function run() {
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById("image_shower").src = `./assets/${selected_image}`
}
