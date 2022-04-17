import { productsModule } from './products'
import { orderModule } from './order'
import { carouselModule } from './carousel'

(function() {

  carouselModule.init();
  productsModule.init();  
  orderModule.init();

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
    
  }))

  document.querySelector('#order').addEventListener('click', () => {
    orderModule.success();
  })

})()