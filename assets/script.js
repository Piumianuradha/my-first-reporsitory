const todoList = [{
    listItems: 'finish javascript', 
    dueDate: '28/08/2023'
  },{
    listItems:'write the Readme file',
    dueDate: '28/08/2023'
  }
  ];
  
  function youDidIt() {
    alert("Well Done, You finished the task!!!");
  }
  
  makeAvailableTodoList();
  stopwatch();
  
  
  
  function makeAvailableTodoList(){
  
    let todoListHTML = '';
    
  
    for (let i = 0; i < todoList.length; i++ ) {
      
      const objectTodo = todoList[i];
      const {listItems,dueDate} = objectTodo;
      const html = `
  
      <div div="stopwatchContainer">
          <div id="timerInterface">00:00:00</div>
          <button id="btnStart" class="btnTimer">Start ${i}</button>
          <button id="btnPause" class="btnTimer">Pause</button>
          <button id="btnReset" class="btnTimer">Reset</button>
      </div>
  
        
        <div>${listItems}</div>
        <div>${dueDate}</div>
        
        <button onclick="
          
          todoList.splice(${i},1);
          makeAvailableTodoList();
          youDidIt();
          stopwatch();
        "class="delete-todo-button">Delete</button>
        `;
      todoListHTML += html;
    }
   
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  
  }
  
  function addTodo() {
    const inputElement = document.querySelector('.js-items-input');
    const listItems = inputElement.value;
  
    const dateInputElement = document.querySelector('.js-due-date-input-area');
    const dueDate = dateInputElement.value;
    
    todoList.push({
      listItems,
      dueDate
  
    });
    
    
    inputElement.value = '';
  
    makeAvailableTodoList();
  
    stopwatch();
  
  }
  
  function stopwatch(i) {
    const timerInterface = document.querySelector("#timerInterface");
    const btnStart = document.querySelector(".btnTimer");
    const btnPause = document.querySelector("#btnPause");
    const btnReset = document.querySelector("#btnReset");
    console.log(btnStart);
    let startTime = 0;
    let progressTime = 0;
    let currentTime = 0;
    let paused = true;
    let intervalId;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
  
    btnStart.addEventListener("click", () => {
      if(paused) {
        paused = false;
        startTime = Date.now() - progressTime;
        intervalId = setInterval(activateTimer, 75);
      }
    });
    btnPause.addEventListener("click", () => {
      if(!paused) {
          paused = true;
          progressTime = Date.now() - startTime;
          clearInterval(intervalId);
        }
    });
        
  
    btnReset.addEventListener("click", () => {
        paused = true;
        clearInterval(intervalId);
        startTime = 0;
        progressTime = 0;
        currentTime = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        timerInterface.textContent = "00:00:00";
  
  
    });
  
        function activateTimer() {
            progressTime = Date.now() - startTime;
  
            seconds = Math.floor((progressTime / 1000) % 60);
            minutes = Math.floor((progressTime / (1000 * 60)) % 60);
            hours = Math.floor((progressTime / (1000 * 60 * 60)) % 60);
            
            seconds = pad(seconds);
            minutes = pad(minutes);
            hours = pad(hours);
  
            timerInterface.textContent = `${hours}:${minutes}:${seconds}`;
  
            function pad(unit){
              return(("0") + unit).length > 2 ? unit : "0" + unit;
            }
        
          }
  
  }
  stopwatch();
  
  
  