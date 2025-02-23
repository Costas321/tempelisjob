document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".img2").setAttribute("src", "images/sport24_logo.png");
  
    document.querySelector("h2").innerHTML = "Μια δουλίτσα να γλείφω ό,τι κινείται";
  
    document.querySelector(".change-image-btn").addEventListener("click", function() {
      let randomImageNum = Math.floor(Math.random() * 17) + 1;
  
      document.querySelector(".img2").setAttribute("src", "images/job" + randomImageNum + ".png");
  
      if (randomImageNum >= 1 && randomImageNum <= 6) {
        document.querySelector("h2").innerHTML = "Για εδώ είσαι";
      } else if (randomImageNum >= 7 && randomImageNum <= 14) {
        document.querySelector("h2").innerHTML = "Λυπούμαστε, δεν έχεις τα προσόντα";
      } else {
        document.querySelector("h2").innerHTML = "Χαχαχαχα, ούτε απ' έξω";
      }
    });
  });
  
