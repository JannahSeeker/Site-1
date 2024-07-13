const track = document.getElementById("image-track");
const blur = document.getElementById("blur1");
const track1 = document.getElementById("image-track-1");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

// const handleOnMove = e => {
//   if(track.dataset.mouseDownAt === "0") return;
  
//   const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;
  
//   const percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
//   track.dataset.percentage = nextPercentage;
  
//   track.animate({
//     transform: `translate(0%,${nextPercentage}%)`
//   }, { duration: 1200, fill: "forwards" });
  
//   track1.animate({
//     transform: `translate(0%,-${nextPercentage}%)`
//   }, { duration: 1200, fill: "forwards" });
  
// //   for(const image of track.getElementsByClassName("image")) {
// //     image.animate({
// //       objectPosition: `${100 + nextPercentage}% center`
// //     }, { duration: 1200, fill: "forwards" });
// //   }
// }

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
  let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -80.5);
    nextPercentage = nextPercentage;
  track.dataset.percentage = nextPercentage;
  prevPercentage = nextPercentage;

  track.style.transform = `translate(0%,${-nextPercentage}%)`;
  blur.style.transform = `translate(-35vw,${nextPercentage}%)`;
  track1.style.transform = `translate(0%,${nextPercentage}%)`;

//   const images = track.getElementsByClassName("image");
//   for (const image of images) {
//     image.style.objectPosition = `${100 + nextPercentage}% center`;
//   }
};

// Event listener for scroll wheel
window.addEventListener("wheel", handleWheel);

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);