const imageButton = document.querySelector(".product-card__image-button");
const modal = document.querySelector(".product-modal");
const closeButton = document.querySelector(".product-modal__close");
const imageItems = document.querySelectorAll(".product-card__images-item");

function setupModal() {
  if (imageButton && modal && closeButton) {
    imageButton.addEventListener("click", () => {
      modal.showModal();
    });

    closeButton.addEventListener("click", () => {
      modal.close();
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  }
}

function setupImageSelection() {
  if (!imageItems.length) {
    return;
  }

  imageItems.forEach((imageItem) => {
    imageItem.addEventListener("click", () => {
      imageItems.forEach((item) => {
        item.classList.remove("product-card__images-item--active");
      });

      imageItem.classList.add("product-card__images-item--active");
    });
  });
}

setupModal();
setupImageSelection();
