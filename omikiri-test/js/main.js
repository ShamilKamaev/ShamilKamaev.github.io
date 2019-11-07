document.addEventListener('DOMContentLoaded', function () {
  var s = Snap('#snap-container');
  Snap.load('../imgs/_web.svg', function (loadedItem) {
    s.append(loadedItem);

    var rayContainer = s.select('#RayGroup').selectAll('g');
    function AnimateRay(ray) {
      var _this = this;
      _this.ray = ray;
      _this.i = ray.length - 1;
      _this.currentPath = ray[_this.i];

      _this.hidePath = function () {
        if (_this.i == -1) {
          _this.i = ray.length - 1;
          _this.currentPath = ray[_this.i];
        }
        _this.currentPath.animate({ opacity: 0 }, 100, mina.ease, _this.i > 0 ? _this.hidePath : _this.showPath);
        _this.i--;
        _this.currentPath = _this.ray[_this.i];
      }
      _this.showPath = function () {
        if(_this.i == -1) {
          _this.i = ray.length - 1;
          _this.currentPath = ray[_this.i];
        }
        _this.currentPath.animate({ opacity: 1 }, 100, mina.ease, _this.i > 0 ? _this.showPath : _this.hidePath);
        _this.i--;
        _this.currentPath = _this.ray[_this.i];
      }
      _this.init = function () {
        _this.hidePath();
      }
    }

    rayContainer.forEach(elem => {
      var currentRay = elem.selectAll('path');
      var delay = Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
      setTimeout(function () {
        new AnimateRay(currentRay).init();
      }, delay);
    });


    function soundClick() {
      var audio = new Audio();
      audio.src = '/media/Infected.mp3';
      audio.autoplay = true;
      audio.preload = "true"
    }
    var pig = document.body.querySelector('.pig-img');
    pig.addEventListener('click', function() {
      soundClick();
    });

    var svgBg = document.querySelector('svg');
    setTimeout(function () {
      svgBg.classList.add('active');
    }, 1000);


    var links = document.body.querySelectorAll('.bigd-link');

    links.forEach(function (elem) {
      elem.addEventListener('click', function () {
        window.location.href = 'https://thebigd.ru/'
      })
    });
    
  });
}); /* DOMContentLoaded */
