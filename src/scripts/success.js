(function() {

  const order = sessionStorage.getItem('order');

  function generateTemplate(data) {
    return `
      <img src="${data.image}" alt="${data.name}">
      <p>Your Order:</p>
      <h3>${data.name}</h3>
    `
  }

  if(order) {

    const list = JSON.parse(order);
    const params = new URLSearchParams(list).toString();

    fetch(`https://front-br-challenges.web.app/api/v1/ramen-go/?${params}`)
      .then(result => result.json())
      .then(result => {
        document.querySelector('.order').insertAdjacentHTML('beforeend', generateTemplate(result.data));
      })

  } else {
    window.location.href = '/'
  }

})()