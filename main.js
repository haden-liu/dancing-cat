// Create a variable to store a reference to the img DOM Node
let img = document.querySelector("img");

let left = 0;

img.style.left = left + "px";

// Create a function called catWalk that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// function catWalk() {
//   left += 10;
//   img.style.left = left + "px";

//   if (left < window.innerWidth - 300) {
//     setTimeout(catWalk, 50);
//   }
// }

// bonus 1

function catWalk() {
  cd;
  left += 10;
  img.style.left = left + "px";
  if (left < window.innerWidth) {
    setTimeout(catWalk, 50);
  } else {
    left = -300;
    catWalk();
  }
}
