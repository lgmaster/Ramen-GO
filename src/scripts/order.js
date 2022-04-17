export const orderModule = (function () {
  const order = {};

  const resetOrder = () => {
    sessionStorage.removeItem('order');
  }

  const saveOrder = (type, id) => {
    order[type] = id;
    sessionStorage.setItem('order', JSON.stringify(order));
  }

  const checkOrderCompleted = () => {
    const order = sessionStorage.getItem('order');

    if(order) {

      const list = JSON.parse(order);
      
      if(Object.keys(list).length === 2) {
        return true;
      } else {
        return false;
      }
  
    } else {
      return false;
    }
  }

  const placeOrder = () => {
    if(checkOrderCompleted()) {
      window.location.href = '/success'
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
    },
    check: function () {
      return checkOrderCompleted()
    }
  }
})()