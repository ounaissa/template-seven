document.querySelector(".links").onclick = function () {
  this.classList.toggle("active");
};
let help = document.querySelector(".help");
let line = document.querySelector(".line div");
let track = document.querySelector(".line");
let icons = document.querySelectorAll(".steps i ");
let counter = 0;
let oldscroll = help.offsetTop - 500;
let currscroll;

window.addEventListener("scroll", () => {
  if (window.scrollY >= help.offsetTop - 500) {
    icons.forEach((e) => {
      if (window.scrollY >= e.offsetTop) {
        e.style.color = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--main-color");
      }
    });
    currscroll = window.scrollY;
    /*
    .forEach((e) => {
      e.style.color = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--main-color");
    });*/
    if (oldscroll < currscroll) {
      oldscroll = currscroll;
      counter += 10;
    } else {
      oldscroll = currscroll;
      counter -= 10;
    }
    if (counter >= 0 && counter < track.offsetHeight - line.offsetHeight) {
      line.style.transform = `translateX(-50%) translateY(${counter}px)`;
    }
  }
});
//`${(scrollTop / height) * 100}%`
//   100%     |   1049
//            ×
//    %     |    x
