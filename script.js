let currentIndex = 0;
const gallery = document.querySelectorAll(".imageGallery img");
const fullImageBox = document.getElementById("fullImageBox");
const fullImage = document.getElementById("fullImage");

function openFullImage(imgElement) {
  fullImageBox.style.display = "flex";
  fullImage.src = imgElement.src;
  currentIndex = Array.from(gallery).indexOf(imgElement);
}

function closeFullImage() {
  fullImageBox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % gallery.length;
  fullImage.src = gallery[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  fullImage.src = gallery[currentIndex].src;
}

function filterImages(category) {
  gallery.forEach((img) => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
