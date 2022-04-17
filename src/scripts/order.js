export const orderModule = (function () {
  const order = {};

  const resetOrder = () => {
    sessionStorage.removeItem('order');
  }

  const saveOrder = (type, id) => {
    order[type] = id;
    sessionStorage.setItem('order', JSON.stringify(order));
  }

  const placeOrder = () => {
    const order = sessionStorage.getItem('order');

    if(order) {

      const list = JSON.parse(order);
      
      if(Object.keys(list).length === 2) {
        window.location.href = '/success'
      }
  
    }
  }

  return {
    init: function () {
      resetOrder()
    },
    setOrder: function (type, id) {
      saveOrder(type, id)
    },
    success: function() {
      placeOrder()
    }
  }
})()