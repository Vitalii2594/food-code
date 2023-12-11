document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.products-list-general');
  
    function handleScroll() {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  
      if (scrollPercent >= 30) {
        cardsContainer.classList.add('animation');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });