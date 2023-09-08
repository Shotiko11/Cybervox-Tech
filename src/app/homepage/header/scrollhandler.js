

let prevScrollPos = window.pageYOffset;
const header = document.querySelector(".header");

const handleScroll = () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-80px";
  }
  prevScrollPos = currentScrollPos;
};

export default function initScrollHandler() {
  window.addEventListener("scroll", handleScroll);
}
