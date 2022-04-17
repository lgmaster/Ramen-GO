export const productsModule = (function () {
  const options = {
    meat: [
      {
        id: 'chasu',
        name: 'Chasu',
        description: 'A sliced flavourful pork meat with a selection of season vegetables.',
        price: 10
      },
      {
        id: 'yasai_vegetarian',
        name: 'Yasai Vegetarian',
        description: 'A delicious vegetarian lamen with a selection of season vegetables.',
        price: 10
      },
      {
        id: 'karaague',
        name: 'Karaague',
        description: 'Three units of fried chicken, moyashi, ajitama egg and other vegetables.',
        price: 12
      }  
    ],
    broth: [
      {
        id: 'salt',       
        name: 'Salt',
        description: 'Simple like the seawater, nothing more',
        price: 10
      },
      {
        id: 'shoyu',        
        name: 'Shoyu',
        description: 'The good old and traditional soy sauce ',
        price: 10
      },
      {
        id: 'miso',       
        name: 'Miso',
        description: 'Paste made of fermented soybeans',
        price: 10
      }
    ]
  }

  const products = [];

  const generateTemplate = (type, product) => {
    return `
      <a href="#meat-list" class="item splide__slide" data-type="${type}" data-id="${product.id}">
        <div class="item__image ${product.id}"></div>
        <p class="item__title">${product.name}</p>
        <p class="item__description">${product.description}</p>
        <p class="item__price">US$ ${product.price}</p>
      </a>
    `
  }

  const insertTemplateInHTML = (elementClass, type, product) => {
    document.querySelector(elementClass).insertAdjacentHTML('beforeend', generateTemplate(type, product));
  }


  const getProducts = () => {
    
    options.broth.map(product => {      
      insertTemplateInHTML('.broth__list', 'broth', product);
    })

    options.meat.map(product => {      
      insertTemplateInHTML('.meat__list', 'meat', product);
    })

  }

  return {
    init: function () {
      getProducts();
    }
  }

})()