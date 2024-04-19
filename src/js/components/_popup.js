document.addEventListener("DOMContentLoaded", function(){
  const popupItemsBtn = document.querySelectorAll('[data-product] .btn');
  const buttonRequest = document.querySelector('.header .request-btn');
  let openPopup = function(el, button) {
    let popupImage = el?.querySelector('[data-image]').getAttribute('src');
    let popupName = el?.querySelector('[data-name]');
    let popupDetails = el?.querySelector('[data-details]');
    let popupDesc = el?.querySelector('[data-desc]');
    let popupOffer = el?.querySelector('[data-offer]');
    let popupPrice = el?.querySelector('[data-price]');

    let triggerRequest = function(parent, button, el) {
      if (button) {
        button.addEventListener('click', function(){
          parent.remove();
          el.click();
        })
      }
    }

    let closePopup = function(el) {
      if (el) {
        el.addEventListener('click', function() {
          if (event.target === this || event.target.classList.contains('product-popup__close')) {
            this.remove();
            document.body.style.overflow = "auto";
          }
        })
      }
    }

    let popupContent = `<div class="product-popup" id="product-popup">
      <div class="product-popup__box">
        <div class="product-popup__image">
        <img src="${popupImage}" alt="${popupName ? popupName.innerText : ''}" width="440" height="570" loading="lazy">
          ${popupOffer ? popupOffer.outerHTML : ''}
        </div>

        <div class="product-popup__content">
          <span class="product-popup__close" id="popup-close"></span>
          <h2 class="product-popup__name">${popupName ? popupName.innerText : ''}</h2>
          <ul class="product-popup__details">
            ${popupDetails ? popupDetails.innerHTML : ''}
          </ul>
          <p class="product-popup__desc">${popupDesc ? popupDesc.innerHTML : ''}</p>
          ${popupPrice ? popupPrice.outerHTML : ''}
          <button class="btn btn--reverse" id="popup-button">Buy</button>
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', popupContent);
    document.body.style.overflow = "hidden";

    triggerRequest(document.querySelector('#product-popup'), document.querySelector('#popup-button'), button);
    closePopup(document.querySelector('#product-popup'));
  }

  for (let btn of popupItemsBtn) {
    btn.addEventListener("click", function(){
      openPopup(btn.closest('[data-product]'), buttonRequest);
    })
  }
});