export const carouselModule = (function() {
  const options = {
    arrows: false,
    perPage: 1,
    width: '100%',
    fixedWidth: '20rem',
    padding: '1rem',
    gap: '1rem',
    focus: 'center',
    breakpoints: {
      700: {
        destroy: false,
      },
      10000: {
        destroy: true
      },
    }

  }
  
  const mountCarousels = () => {
    const splideOne = new Splide( '.splide__broth' , options).mount();
    const splideTwo = new Splide( '.splide__meal' , options).mount();
  }

  return {
    init: function() {
      mountCarousels()
    }
  }

})()