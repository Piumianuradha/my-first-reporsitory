function stopwatch() {

    let passBy = 0;
    var interval;
    let stopwatchDisplay = document.getElementById("time");
    
    function start() {
      let startTime = Date.now() - passBy;
      interval = setInterval(() => {
        passBy = Date.now() - startTime;
        displayTime(passBy);
      }, 10);
      displayButton("stop");
    }
    
    function stop() {
      clearInterval(interval);
      displayButton("start");
    }
    
    function reset() {
      clearInterval(interval);
      passBy= 0;
      displayTime(0);
      displayButton("start");
    }
    
    function displayTime(time) {
      let milliseconds = Math.floor((time % 1000) / 10);
      let seconds = Math.floor(time / 1000) % 60;
      let minutes = Math.floor(time / 60000) % 60;
      let hours = Math.floor(time / 3600000) % 60;
    
      milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      hours = hours < 10 ? "0" + hours : hours;
    
      stopwatchDisplay.innerHTML =
        hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
    }
    
    function displayButton(buttonType) {
      let show = buttonType == "start" ? startButton : pauseButton;
      let hide = buttonType == "start" ? pauseButton : startButton;
      show.style.display = "inline-block";
      hide.style.display = "none";
    }
    
    
    let startButton = document.getElementById("start");
    let pauseButton = document.getElementById("stop");
    let resetButton = document.getElementById("reset");
    
    startButton.addEventListener("click", start);
    pauseButton.addEventListener("click", stop);
    resetButton.addEventListener("click", reset);
    }
    stopwatch();