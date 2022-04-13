$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });

  particlesJS.load('particles-js', 'particlesjs.json');
});

var typed = new Typed('#typed', {
  strings: ['<p class="header1"> 0xRh1d0Y </p>^1000\n `<p class="header3">Cyber Security Enthusiast | CTF Player | OSINT Enthusiast </p>` ^400\n `<a class="link1" href="https://twitter.com/0xRh1d0Y" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fab fa-twitter"></i></a>`  `<a class="link1" href="https://github.com/0xRh1d0Y" data-toggle="tooltip" data-placement="bottom" title="Github"><i class="fab fa-github"></i></a>`'],
  typeSpeed: 80,
  backSpeed: 0,
  loop: false,
  cursorChar: '|',
  fadeout: true,
});
