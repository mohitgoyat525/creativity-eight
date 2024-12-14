let initialPath = "M 10 100 Q 500 100 990 100";
let finalPath = "M 10 100 Q 500 100 990 100";
let string = document.querySelector("#string");
string.addEventListener("mousemove", function (event) {
  let rect = string.getBoundingClientRect();
  let relativeY = event.clientY - rect.top;
  initialPath = `M 10 100 Q 500 ${relativeY} 990 100`;
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.3,
    ease: "power3.out",
  });
});
string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.8,
    ease: "elastic.out(1, 0.2)",
  });
});
