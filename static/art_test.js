var track = document.getElementById("scroll_2");
var track1 = document.getElementById("scroll_1");

const handleScroll = (delta) => {
  scrollingspeed = 1.3;
  track.scrollTop += delta * scrollingspeed;
  track1.scrollTop -= delta* scrollingspeed;



};

const handleWheel = (event) => {
  const delta = event.deltaY;
  handleScroll(delta);
};

const handleKeyDown = (event) => {
  const scrollAmount = 30; // Adjust the scroll amount as needed
  if (event.key === "ArrowDown") {
    handleScroll(scrollAmount);
  } else if (event.key === "ArrowUp") {
    handleScroll(-scrollAmount);
  }
};

const handleKeyUp = (event) => {
  const scrollAmount = 30; // Adjust the scroll amount as needed
  if (event.key === "ArrowDown") {
    handleScroll(scrollAmount);
  } else if (event.key === "ArrowUp") {
    handleScroll(-scrollAmount);
  }
};

document.addEventListener("wheel", handleWheel);
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);
