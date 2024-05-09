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
    navigation.style.boxShadow = "0px 2px 15px rgba(0, 0, 0, 0.11)";
  } else {
    navigation.style.backgroundColor = "";
    navigation.style.boxShadow = "none";
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

/* aos library*/ 
AOS.init({
  easing: 'ease-in-out-sine',
  once: true,
});
/*aos library*/ 

const cursor = new MouseFollower({
  el: null,
  container: document.body,
  className: 'mf-cursor',
  innerClassName: 'mf-cursor-inner',
  textClassName: 'mf-cursor-text',
  mediaClassName: 'mf-cursor-media',
  mediaBoxClassName: 'mf-cursor-media-box',
  iconSvgClassName: 'mf-svgsprite',
  iconSvgNamePrefix: '-',
  iconSvgSrc: '',
  dataAttr: 'cursor',
  hiddenState: '-hidden',
  textState: '-text',
  iconState: '-icon',
  activeState: '-active',
  mediaState: '-media',
  stateDetection: {
    '-pointer': 'a,button',
    '-hidden': 'iframe'
  },
  visible: true,
  visibleOnState: false,
  speed: 0.55,
  ease: 'expo.out',
  overwrite: true,
  skewing: 3,
  skewingText: 1,
  skewingIcon: 2,
  skewingMedia: 2,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.15,
  stickDelta: 0.15,
  showTimeout: 20,
  hideOnLeave: true,
  hideTimeout: 300,
  hideMediaTimeout: 300
});