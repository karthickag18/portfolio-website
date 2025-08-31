// Toggle menu for mobile view
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.background = "linear-gradient(45deg, #1f1c2c, #928DAB)";
  document.body.style.backgroundSize = "cover";
  
  // Create a 3D grid overlay
  const style = document.createElement("style");
  style.innerHTML = `
    body::before {
      content: "";
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-image: 
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: -1;
    }
  `;
  document.head.appendChild(style);
});

document.addEventListener("DOMContentLoaded", function () {
  const skillList = document.querySelectorAll("#skillList li");
  const toggleBtn = document.getElementById("toggleBtn");
  let expanded = false;

  toggleBtn.addEventListener("click", function () {
    expanded = !expanded;
    if (expanded) {
      skillList.forEach(li => li.style.display = "list-item");
      toggleBtn.textContent = "⬆ Show Less";
    } else {
      skillList.forEach((li, index) => {
        li.style.display = (index < 3) ? "list-item" : "none";
      });
      toggleBtn.textContent = "⬇ Show More";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("projectSlider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let index = 0;

  function showSlide() {
    slider.style.transform = `translateX(${-index * 100}%)`;
  }

  nextBtn.addEventListener("click", function () {
    if (index < slider.children.length - 1) {
      index++;
      showSlide();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (index > 0) {
      index--;
      showSlide();
    }
  });
});

