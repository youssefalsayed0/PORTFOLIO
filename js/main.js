let navigation = document.getElementById("navbar");
let arrow = document.getElementById("floating-arrow");
let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    navigation.style.backgroundColor = "white";
  } else {
    navigation.style.backgroundColor = "";
  }

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }

  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

};

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

