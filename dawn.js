console.log("hello")



let bar = document.querySelector(".bar1");
let flood = document.querySelector(".flood");
let flood1 = document.querySelector(".flood1");

// Initially hide both elements:
// flood.style.display = "none";
// flood1.style.display = "none";

// Function to handle element display based on screen width and bar click:
const toggleFunction = () => {
  const mediaQuery = window.matchMedia("(max-width: 360px)");

  if (mediaQuery.matches) {
    // Set positioning for smaller screen when shown on larger screen
    flood.style.display = "none";
    flood1.style.display = flood1.style.display === "none" ? "block" : "none";
  } else {
    // Set positioning for larger screen when shown on smaller screen
    flood1.style.display = "none";
    flood.style.display = flood.style.display === "none" ? "block" : "none";
  }
};

// Attach toggle function to bar clicks:
bar.addEventListener("click", toggleFunction);

// Trigger toggle function initially to set display based on screen width:
toggleFunction();
