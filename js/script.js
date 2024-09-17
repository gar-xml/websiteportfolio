window.addEventListener('DOMContentLoaded', event => {
   //Fungsimenyusutkan navbar
   var navbarShrink = Function () {
     const navbarCollapsible = document.body.querySelector('#mainNav');
     if (!navbarCollapsible) {
       return;
     }
     if (window.scrollY === 0) {
       navbarCollapsible.classList.remove('navbar-shrink')
     } else {
       navbarCollapsible.classList.add('navbar-shrink')
     }
   };
   
     //mengecilkan navbar
     navbarShrink();
     
      // Mengecilkan navbar saat halamab digulir
      document.addEventListener('scroll', navbarShrink);
      if (mainNav) {
        new bootstrap.scrollSpy(document.body, {
          terget:'#mainNav',
          rootMargin: '0px 0px -40%',
        });
      };
      
      // Ciutkan navbar responsif saat toggler terlihat
      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
          document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.map(function (responsiveNavItem) {
          responsiveNavItem.addEventListener('click', () => {
              if (window.getComputedStyle(navbartoggler).display !== 'none') {
             {
         });
      });
  });
 
});



              
                
        