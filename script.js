var timerEl = document.getElementById('countdown')
const PGbtn = document.getElementById('playGame')


let lossScore = 0;
let winScore = 0;





function countdown() {
    var timeLeft = 5;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '0 seconds remaining';

        clearInterval(timeInterval)
        gameover()
        }
        
    }, 1000);
  }



  function gameover() {
            

            const lossScoreBoard = document.getElementById('loss')
            lossScore++;
            lossScoreBoard.textContent = lossScore;
            PGbtn.textContent = "Play Again"
            gamewin()
        }


  

        function gamewin(){
            const winScoreBoard = document.getElementById('win')
            winScore++;
            winScoreBoard.textContent = winScore;

        }
        

        PGbtn.addEventListener("click", function (e) {
            countdown()
        })

 

