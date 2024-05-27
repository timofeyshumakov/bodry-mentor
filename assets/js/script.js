const progressCards = document.getElementsByClassName("progress-card");
const programmCards = document.getElementsByClassName("programm-card");
const progressSlider = document.getElementById("progressCards");
const progressPointer = document.getElementsByClassName("progress__scroll-point");
const programmPointer = document.getElementsByClassName("progress__scroll-point");
let currentProgressCard = 0;
let currentProgrammCard = 0;
const white = 'rgb(255, 255, 255)';
const gold = 'rgb(255, 232, 178)';


for(let i = 1; i < programmCards.length; i++){
    programmCards[i].style.display = "none";
}

function previousProgressCard() {
    if(currentProgressCard > 0){
        progressCards[currentProgressCard].style.display = 'none';
        currentProgressCard--;
        progressCards[currentProgressCard].style.display = 'flex';
        progressPointer[currentProgressCard + 1].style.background = white;
        progressPointer[currentProgressCard].style.background = gold;
      }
}
let ip = `translateX(0)`;
function nextProgressCard() {
    if(currentProgressCard === progressCards.length - 1){
      setTimeout(function(){
        currentProgressCard = 0;
        ip = `translateX(-${currentProgressCard}00%)`;
        progressCards[currentProgressCard].style.transform = `translateX(-${currentProgressCard}00%)`;
        progressCards[currentProgressCard + 1].style.transform = `translateX(-${currentProgressCard}00%)`;
        progressCards[progressCards.length - 1].style.transform = `translateX(-${currentProgressCard}00%)`;
        for(i = 0; i < progressCards.length - 1; i++){
          progressCards[i].style.removeProperty('transform');
        }
    },0.05);
    }else{
        progressCards[currentProgressCard].style.display = 'flex';
        currentProgressCard++;
        progressCards[currentProgressCard].style.display = 'flex';
        setTimeout(function(){
            ip = `translateX(-${currentProgressCard}00%)`;
            progressCards[currentProgressCard - 1].style.transform = `translateX(-${currentProgressCard}00%)`;
            progressCards[currentProgressCard].style.transform = `translateX(-${currentProgressCard}00%)`;
            progressCards[currentProgressCard + 1].style.transform = `translateX(-${currentProgressCard}00%)`;
        },0.05);
        progressPointer[currentProgressCard - 1].style.background = white;
        progressPointer[currentProgressCard].style.background = gold;
    }
}
// Флаг, который указывает на то, что элемент зажат
let isElementClicked = false;
let ff = 0;
let ss = 0;
let posX = 0;

progressSlider.addEventListener('mousedown', function(e) {
  ss = e.pageX;
  isElementClicked = true;
  progressCards[currentProgressCard].style.cursor = 'grabbing';
  
});
progressSlider.addEventListener('touchstart', function(e) {
  ss = e.touches[0].pageX;
  isElementClicked = true;
  progressCards[currentProgressCard].style.cursor = 'grabbing';
});

progressSlider.addEventListener('mousemove', function(e) {
  posX = e.pageX;
  move();
});
progressSlider.addEventListener('touchmove', function(e) {
    posX = e.touches[0].pageX;

    move();
});

function move(){
  if(isElementClicked){
    cw = progressSlider.offsetWidth;
    p = currentProgressCard * 100 + ((ss - posX) / cw) * 100;
    progressCards[currentProgressCard].style.transform = `translateX(-${p}%)`;
    if(currentProgressCard < progressCards.length - 1){
      progressCards[currentProgressCard + 1].style.transform = `translateX(-${p}%)`;
    }else{
      progressCards[0].style.transform = `translateX(${progressCards.length * 100 - p}%)`;
    }
  }
}
    function slider(){
      ff = ss - posX;
      
      if(ff > 100){
          nextProgressCard();
      }else if(ff < -100){
        previousProgressCard();
      }else{
          progressCards[currentProgressCard].style.transform = ip;
          if(currentProgressCard < progressCards.length - 1){
            progressCards[currentProgressCard + 1].style.transform = ip;
          }else{
            progressCards[0].style.transform = ip;
          }
          
      }
      isElementClicked = false;
      progressCards[0].style.cursor = 'grab';
    }

    
    progressSlider.addEventListener('mouseup', function(e) {
      slider();
    });
// Обработчик передвижения мыши
progressSlider.addEventListener('touchend', function(e) {
  slider();
});

function previousProgrammCard() {
  if(currentProgrammCard > 0){
      programmCards[currentProgrammCard].style.display = 'none';
      currentProgrammCard--;
      programmCards[currentProgrammCard].style.display = 'flex';
      programmPointer[currentProgrammCard + 1].style.background = white;
      programmPointer[currentProgrammCard].style.background = gold;
    }
}

function nextProgrammCard() {
  if(currentProgrammCard < programmCards.length - 1){
      programmCards[currentProgrammCard].style.display = 'none';
      currentProgrammCard++;
      programmCards[currentProgrammCard].style.display = 'flex';
      programmPointer[currentProgrammCard - 1].style.background = white;
      programmPointer[currentProgrammCard].style.background = gold;
    }
}

const progressScroll = document.getElementById('progressScroll');
progressScroll.addEventListener('click', function(event) {
      let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
      if (index >= 0) {
      for (let i = 0; i < progressCards.length ; i++) {
        progressCards[i].style.display = 'none';
        progressPointer[i].style.background = white;
      }
      progressCards[index].style.display = 'flex';
      progressPointer[index].style.background = gold;
      currentProgressCard = index;
      }
  });
  const programmScroll = document.getElementById('programmScroll');
  programmScroll.addEventListener('click', function(event) {
        let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
        if (index >= 0) {
        for (let i = 0; i < programmCards.length - 1; i++) {
          programmCards[i].style.display = 'none';
          programmPointer[i].style.background = white;
        }
        programmCards[index].style.display = 'flex';
        programmPointer[index].style.background = gold;
        currentProgrammCard = index;
        }
    });