function mouse_position(e) {
    //left Eye Pixel and Element
    var leftEye = document.getElementById("eyeIDLeft");
    var leftEyeMedianPosition = {
      x: 150,
      y: 120
    };
  
    //right Eye Pixel and Element
    var rightEye = document.getElementById("eyeIDRight");
    var rightEyeMedianPosition = {
      x: 150,
      y: 120
    };
  
    var e = window.event;
    //Mouseposition Point
    var posY = e.clientY;
    var posX = e.clientX;
    console.log(posY);
  
    // angle in radians
    var angleRadiansLeft = Math.atan2(
      posY - leftEyeMedianPosition.x,
      posX - leftEyeMedianPosition.y
    );
    var angleRadiansRight = Math.atan2(
      posY - rightEyeMedianPosition.x,
      posX - rightEyeMedianPosition.y
    );
  
    var ytransLeftEye = 25 * Math.cos(angleRadiansLeft);
    var xtransLeftEye = 25 * Math.sin(angleRadiansLeft);
  
    var ytransRightEye = 25 * Math.cos(angleRadiansRight);
    var xtransRightEye = 25 * Math.sin(angleRadiansRight);
  
    leftEye.setAttribute(
      "transform",
      "translate(" + ytransRightEye + ", " + xtransLeftEye + ")"
    );
    rightEye.setAttribute(
      "transform",
      "translate(" + ytransRightEye + ", " + xtransLeftEye + ")"
    );
  
    var t = setTimeout(mouse_position, 10000);
  }

  let title = document.querySelector(".menu-bottom");
  let cat = document.querySelector(".svg")


  function turnDark() {
    document.body.style.background = "black";
    document.body.style.color = "white";
  cat.style.color = "white";
  }
function turnBack(){
  document.body.style.background = "white";
    document.body.style.color = "black";
}

title.addEventListener("mouseover", turnDark);
  title.addEventListener("mouseout",turnBack);
  

  