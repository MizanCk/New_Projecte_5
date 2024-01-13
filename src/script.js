function myFunction() {
    var x = document.querySelector(".jsDropdown");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function myFunction2() {
    var x = document.querySelector(".jsDropdown2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function toggleModal() {
    var x = document.querySelector(".jsDropdown3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function toggleModal4() {
    var x = document.querySelector(".jsDropdown4");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 
function toggleModal5() {
    var x = document.querySelector(".jsDropdown5");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("menu").style.position = "fixed";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "white";
    document.getElementById("menu").style.boxShadow = "0 0 30px rgba(0,0,0,.075)";
    document.getElementById("menu").style.borderBottom = "none";
    document.getElementById("navSection").style.padding = "20px 20px";
  } else {
    document.getElementById("menu").style.position = "absolute";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "transparent";
    document.getElementById("menu").style.boxShadow = "none";
    document.getElementById("menu").style.borderBottom = "1px solid black";
    document.getElementById("navSection").style.padding = "10px 20px";
  }
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 500) {
    document.getElementById("menu").style.transform = "translateY(-200px)";
    document.getElementById("menu").style.transition = "1s";
  }
  else {
    document.getElementById("menu").style.transform = "translateY(0px)";
    
  }
}


// Select tabs and tab buttons
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tabbtn");

// each tab button will have a  click event  listener 
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {

    // hiding all tabs
    tabs.forEach((tab) => {
      tab.classList.add("hidden");
    });

    // showing only the tab that this tab button should show
    const tab = tabBtn.getAttribute("data-tabopen");
    document.getElementById(tab).classList.remove("hidden");
    
    //  we will give same styles to all tab
    tabBtns.forEach((tabBtn) => {
      tabBtn.className =
        "tabbtn border-b-2 border-purple-600  px-2 py-1 cursor-pointer";
    });

    //  we will give special styles to the active tab
    tabBtn.className =
      "tabbtn font-medium border-t-2 border-r-2 border-l-2 border-purple-600 px-2 py-1 text-purple-700 cursor-pointer";
  });
});




var x = document.getElementsByTagName('BODY')[0] // Select body tag because of disable scroll when modal is active
var modal = document.getElementById('modal') // modal
var modalBtn = document.getElementById('modal-button') // launch modal button
var modalClose = document.getElementsByClassName('modal-close') // close modal button

// Open modal
modalBtn.onclick = function () {
        modal.style.display = "flex"; // Show modal
        x.style.overflow = "hidden"; //Disable scroll on body
}

// Select and trigger all close buttons
for (var i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function () {
        modal.style.display = "none"; // Hide modal
        x.style.overflow = "auto"; // Active scroll on body
    })
}

// Close modal when click away from modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide modal
        x.style.overflow = "auto"; // Active scroll on body
    }
}