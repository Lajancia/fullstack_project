<template>
  <body class="absolute bottom-0 right-0 h-full ">
    <div class="my-20 mx-10 pt-10">
      <div id="main1" class="text-white text-6xl pt-5">
        Hello.
      </div>
      <div id="main2" class="text-white text-6xl mb-5">
        My name is
        <span class="text-yellow-500">Soomin Hwang</span>
      </div>
      <div id="sub" class=" flex items-stretch ">
        <div class="wrapper">
          <h1 class="text-white pr-2 flex text-4xl mb-2">
            I'M
            <span
              class="txt-rotate text-yellow-500 ml-2"
              data-period="2000"
              data-rotate='[ " Lajancia", " Developer", " Writer", " Illustrator"]'
            ></span>
          </h1>
        </div>
      </div>

      <div id="text" class="text-white">
        This Webpage is for various private front end test and back end test.
        Have displayed 3D modeling and illustrations, js aninations, project
        summaries and so on. You can freely check out the projects and arts that
        I made. Please understand that some categories are not ready.
      </div>
      <div id="button" class="text-center my-20">
        <a
          id="button-detail"
          href="https://lajanciadev.com/resume"
          class="rounded-full text-white text-3xl bg-yellow-500 border-8 border-yellow-500 px-2"
          >Resume</a
        >
      </div>
    </div>
  </body>
</template>

<style scoped>
* {
  /* background-image: url("../assets/coffee.jpg"); */
  font-family: "Anton", sans-serif;
}
.wrapper {
  display: flex;
}
.wrapper #static-txt {
  font-size: 30px;
}
.wrapper #dynamic-txts {
  line-height: 45px;
  height: 45px;
  overflow: hidden;
}
#dynamic-txts li {
  list-style: none;
  position: relative;
  font-size: 30px;
  font-weight: 125;
  top: 0;
  position: relative;
  animation: slide 12s steps(4) infinite;
}
@keyframes slide {
  100% {
    top: -180px;
  }
}
#dynamic-txts li::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  background-color: black;
  width: 100%;
  border-left: 2px solid white;
  animation: typing 3s steps(10) infinite;
}
@keyframes typing {
  40%,
  60% {
    left: calc(100% + 7px);
  }
  100% {
    left: 0;
  }
}

@media (max-width: 420px) {
  #main1 {
    font-size: 2rem;
  }
  #main2 {
    font-size: 2rem;
  }
  #sub {
    font-size: 1rem;
  }
  #button {
    margin-top: 40px;
  }
  #button-detail {
    font-size: 1rem;
  }
  #text {
    font-size: 5px;
    padding-top: 5px;
  }
}
</style>
<script>
export default {
  name: "Home",
};

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
</script>
