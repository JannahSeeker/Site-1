const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

let prevPercentage = 0;

const handleWheel = event => {
  event.preventDefault(); // Prevent default scrolling behavior

  const delta = event.deltaY;
  const maxDelta = window.innerWidth / 2;
  
  // Adjust speed factor to match your desired scrolling speed
  const speedFactor = 0.3; // Adjust this value as needed
  
  const percentage = (delta / maxDelta) * -100 * speedFactor;
  const nextPercentageUnconstrained = prevPercentage + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;
  prevPercentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -50%)`;

//   const images = track.getElementsByClassName("image");
// //   for (const image of images) {
// //     image.style.objectPosition = `${100 + nextPercentage}% center`;
// //   }
};

// Event listener for scroll wheel
window.addEventListener("wheel", handleWheel);

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);