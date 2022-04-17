export const orderModule = (function () {
  const order = {};

  const generateOrder = (type, id) => {
    order[type] = id;
    sessionStorage.setItem('order', JSON.stringify(order));
  }

  return {
    setOrder: function (type, id) {
      generateOrder(type, id)
    }
  }
})()