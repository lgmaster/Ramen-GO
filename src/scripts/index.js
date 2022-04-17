import { productsModule } from './products'
import { orderModule } from './order'
import { carouselModule } from './carousel'

(function() {

  productsModule.init();  
  orderModule.init();
  carouselModule.init();


  [...document.querySelectorAll('.item')].map(item => item.addEventListener('click', (e) => {
    const target = e.currentTarget;
    
    const itemsBroth = [...document.querySelectorAll("[data-type='broth']")];
    const itemsMeat = [...document.querySelectorAll("[data-type='meat']")];

    function checkActiveElements (arrayOfElements) {
      arrayOfElements.map(el => {
        if(el !== target && el.dataset.type === target.dataset.type) {
          el.classList.remove('active')
        } else {
          target.classList.add('active');
        }
      })
    }    

    checkActiveElements(itemsBroth);
    checkActiveElements(itemsMeat);

    orderModule.setOrder(target.dataset.type, target.dataset.id);

    if(orderModule.check()) {
      const btnPlaceMyOrder = document.querySelector('#order');
      
      btnPlaceMyOrder.removeAttribute('disabled');
      btnPlaceMyOrder.classList.remove('btn--primary')
      btnPlaceMyOrder.classList.add('btn--secondary')
    }
    
  }))

  document.querySelector('#order').addEventListener('click', (e) => {
    orderModule.success();
  })

})()