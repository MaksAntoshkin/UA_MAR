document.addEventListener("DOMContentLoaded", () => {
    const clickableSpan = document.querySelector(".side_op");
    const targetDiv = document.querySelector(".side_menu");
    
    clickableSpan.addEventListener("click", () => {
      targetDiv.classList.toggle("open_side");
    });
  });

// document.addEventListener("DOMContentLoaded", () => {
//     const clickableSpans = document.querySelectorAll(".amc_op");
    
//     clickableSpans.forEach(clickableSpan => {
//       clickableSpan.addEventListener("click", () => {
//         const parentDiv = clickableSpan.closest(".container");
//         const targetDiv = parentDiv.querySelector(".amc_main");
        
//         targetDiv.classList.toggle("open_AMC");
//       });
//     });
//   });

document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".container");
  
    containers.forEach(container => {
      const clickableSpans = container.querySelectorAll(".amc_op");
      const targetDivs = container.querySelectorAll(".amc_main");
  
      clickableSpans.forEach((clickableSpan, index) => {
        clickableSpan.addEventListener("click", () => {
          targetDivs[index].classList.toggle("open_AMC");
        });
      });
    });
  });
 

  document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".container");
  
    containers.forEach(container => {
      const clickableSpans = container.querySelectorAll(".gm-op");
      const targetDivs = container.querySelectorAll(".gm-main");
  
      clickableSpans.forEach((clickableSpan, index) => {
        clickableSpan.addEventListener("click", () => {
          targetDivs[index].classList.toggle("open-GM");
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const clickableSpan = document.querySelector(".appendix_op");
    const targetDiv = document.querySelector(".appendix_main");
    
    clickableSpan.addEventListener("click", () => {
      targetDiv.classList.toggle("open_APP");
    });
  });

    

  // let openMenu = document.querySelectorAll(".side_menu");
  // openMenu.forEach((item) =>
  //     item.addEventListener("click", function () {
  //         item.classList.toggle("open_side")
  //     })
  // );

  let changeArrowAmc = document.querySelectorAll(".amc_op");
  changeArrowAmc.forEach((item) =>
      item.addEventListener("click", function () {
          item.classList.toggle("amc_open")
      })
  );

  let changeArrowGm = document.querySelectorAll(".gm-op");
  changeArrowGm.forEach((item) =>
      item.addEventListener("click", function () {
          item.classList.toggle("gm-open")
      })
  );

  let changeArrowAPP = document.querySelectorAll(".appendix_op");
  changeArrowAPP.forEach((item) =>
      item.addEventListener("click", function () {
          item.classList.toggle("appendix_open")
      })
  );

  document.addEventListener('DOMContentLoaded', () => {
    let offset = window.innerWidth < 769 ? 80 : 20;
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.getElementById(targetId.substring(1)); // Видаляємо символ # з id
        if (target) {
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          history.pushState(null, null, targetId); 
        }
      });
    });
  });
  

    