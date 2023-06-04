window.onscroll = function() {
    myFunction();
  };
  
  let navbar = document.getElementById("nav");
  let sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");

    } else {
      navbar.classList.remove("sticky");
    }
  }
  
  window.addEventListener('load', function() {
    myFunction();
  });
  
  const menuBtn = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links-div');
  let menuOpen = false;
  
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      navLinks.classList.add('phone-links');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      navLinks.classList.remove('phone-links');
      menuOpen = false;
    }
  });
  
  function isLaptopWidth() {
    return window.innerWidth >= 1024; 
  }
  
  function handleResize() {
    if (isLaptopWidth()) {
      menuBtn.classList.remove('open');
      navLinks.classList.remove('phone-links');
      menuOpen = false;
    }
  }
  
  window.addEventListener('resize', handleResize);
  