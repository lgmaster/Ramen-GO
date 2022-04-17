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
      3000: {
        destroy: true,
        'completely': true
      },
    }

  }

  const splideOne = new Splide( '.splide__broth' , options);
  const splideTwo = new Splide( '.splide__meal' , options);

  const mountCarousels = () => {
    splideOne.mount();
    splideTwo.mount();
  }

  return {
    init: function() {
      mountCarousels()
    }
  }

})()