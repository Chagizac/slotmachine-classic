const galleryImage = document.querySelector("#gallery-image");
const galleryCaption = document.querySelector("#gallery-caption");
const thumbButtons = document.querySelectorAll(".thumb");
const yearNode = document.querySelector("#year");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear().toString();
}

thumbButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { image, alt, caption } = button.dataset;
    if (!image || !alt || !caption || !galleryImage || !galleryCaption) {
      return;
    }

    thumbButtons.forEach((thumb) => thumb.classList.remove("active"));
    button.classList.add("active");
    galleryImage.src = image;
    galleryImage.alt = alt;
    galleryCaption.textContent = caption;
  });
});
