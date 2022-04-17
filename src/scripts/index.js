import { productsModule } from './products'
import { orderModule } from './order'


(function() {

  productsModule.loadFolders();  

  [...document.querySelectorAll('.item')].map(item => item.addEventListener('click', function (e) {
    const target = e.currentTarget;

    orderModule.setOrder(target.dataset.type, target.dataset.id);
  }))

})()