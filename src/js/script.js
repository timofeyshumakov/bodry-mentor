const progressCards = document.getElementsByClassName("progress__card-container");
const programmCards = document.getElementsByClassName("programm__card-container");
const progressSlider = document.getElementById("progressCards");
const programmSlider = document.getElementById("programmCards");
const progressPointer = document.getElementsByClassName("progress__scroll-point");
const programmPointer = document.getElementsByClassName("programm__scroll-point");
let currentProgressCard = 0;
let currentProgrammCard = 0;
const white = 'rgb(255, 255, 255)';
const gold = 'rgb(255, 232, 178)';
let initialPosition = `translateX(0)`;
let isElementClicked = false;
let finishPosition = 0;
let startPosition = 0;
let posX = 0;

for(i = 0; i < progressCards.length; i++){
  progressPointer[i].style.background = white;
}
progressPointer[0].style.background = gold;

for(i = 0; i < programmCards.length; i++){
  programmPointer[i].style.background = white;
}
programmPointer[0].style.background = gold;

function previousProgressCard() {
  currentProgressCard--;
  if(currentProgressCard < 0){
    currentProgressCard = progressCards.length;
    for(i = 0; i < progressCards.length; i++){
      progressCards[i].style.transform = `translateX(-${currentProgressCard - 1}00%)`;
    }
    initialPosition = `translateX(0)`;
  }else{
    initialPosition = `translateX(-${currentProgressCard}00%)`;
    for(i = 0; i < progressCards.length; i++){
      progressCards[i].style.transform = `translateX(-${currentProgressCard}00%)`;
    }
  }
  for(i = 0; i < progressCards.length; i++){
    progressPointer[i].style.background = white;
  }
  progressPointer[currentProgressCard].style.background = gold;
}

function nextProgressCard() {
  currentProgressCard++;
  if(currentProgressCard >= progressCards.length){
    currentProgressCard = 0;
    for(i = 0; i < progressCards.length; i++){
      progressCards[i].style.transform = `translateX(0)`;
    }
    initialPosition = `translateX(0)`;
  }else{
    initialPosition = `translateX(-${currentProgressCard}00%)`;
    for(i = 0; i < progressCards.length; i++){
      progressCards[i].style.transform = `translateX(-${currentProgressCard}00%)`;
    }
  }
  for(i = 0; i < progressCards.length; i++){
    progressPointer[i].style.background = white;
  }
  progressPointer[currentProgressCard].style.background = gold;
}

progressSlider.addEventListener('mousedown', function(e) {
  startPosition = e.pageX;
  isElementClicked = true;
});

progressSlider.addEventListener('touchstart', function(e) {
  startPosition = e.touches[0].pageX;
  isElementClicked = true;
});

progressSlider.addEventListener('mousemove', function(e) {
  posX = e.pageX;
  progressMoveFunction();
});

progressSlider.addEventListener('touchmove', function(e) {
  posX = e.touches[0].pageX;
  progressMoveFunction();
});

function progressMoveFunction(){
  if(isElementClicked){
    cw = progressSlider.offsetWidth;
    p = (currentProgressCard + ((startPosition - posX) / cw)) * 100;
    if(currentProgressCard < progressCards.length){
      for(i = 0; i < progressCards.length; i++){
      if(p > 0){
        progressCards[i].style.transform = `translateX(-${p}%)`;
      }else{
        progressCards[i].style.transform = `translateX(${-p}%)`;
      }
      }
    }
  }
}

function progressSliderFunction(){
  finishPosition = startPosition - posX;
  if(finishPosition > 100){
    nextProgressCard();
  }else if(finishPosition < -100){
    previousProgressCard();
  }else{
    for(i = 0; i < progressCards.length; i++){
      progressCards[i].style.transform = initialPosition;
    }
  }
  isElementClicked = false;
  startPosition = 0;
  progressCards[0].style.cursor = 'grab';
}

progressSlider.addEventListener('mouseup', function(e) {
  progressSliderFunction();
});

progressSlider.addEventListener('touchend', function(e) {
  progressSliderFunction();
});

//
function previousProgrammCard() {
  currentProgrammCard--;
  if(currentProgrammCard < 0){
    currentProgrammCard = programmCards.length;
    for(i = 0; i < programmCards.length; i++){
      programmCards[i].style.transform = `translateX(-${currentProgrammCard - 1}00%)`;
    }
    initialPosition = `translateX(0)`;
  }else{
    initialPosition = `translateX(-${currentProgrammCard}00%)`;
    for(i = 0; i < programmCards.length; i++){
      programmCards[i].style.transform = `translateX(-${currentProgrammCard}00%)`;
    }
  }
  for(i = 0; i < programmCards.length; i++){
    programmPointer[i].style.background = white;
  }
  programmPointer[currentProgrammCard].style.background = gold;
}

function nextProgrammCard() {
  currentProgrammCard++;
  if(currentProgrammCard >= programmCards.length){
    currentProgrammCard = 0;
    for(i = 0; i < programmCards.length; i++){
      programmCards[i].style.transform = `translateX(0)`;
    }
    initialPosition = `translateX(0)`;
  }else{
    initialPosition = `translateX(-${currentProgrammCard}00%)`;
    for(i = 0; i < programmCards.length; i++){
      programmCards[i].style.transform = `translateX(-${currentProgrammCard}00%)`;
    }
  }
  for(i = 0; i < programmCards.length; i++){
    programmPointer[i].style.background = white;
  }
  programmPointer[currentProgrammCard].style.background = gold;
}

programmSlider.addEventListener('mousedown', function(e) {
  startPosition = e.pageX;
  isElementClicked = true;
});

programmSlider.addEventListener('touchstart', function(e) {
  startPosition = e.touches[0].pageX;
  isElementClicked = true;
});

programmSlider.addEventListener('mousemove', function(e) {
  posX = e.pageX;
  programmMoveFunction();
});

programmSlider.addEventListener('touchmove', function(e) {
  posX = e.touches[0].pageX;
  programmMoveFunction();
});

function programmMoveFunction(){
  if(isElementClicked){
    cw = programmSlider.offsetWidth;
    p = (currentProgrammCard + ((startPosition - posX) / cw)) * 100;
    if(currentProgrammCard < programmCards.length){
      for(i = 0; i < programmCards.length; i++){
      if(p > 0){
        programmCards[i].style.transform = `translateX(-${p}%)`;
      }else{
        programmCards[i].style.transform = `translateX(${-p}%)`;
      }
      }
    }
  }
}

function programmSliderFunction(){
  finishPosition = startPosition - posX;
  if(finishPosition > 100){
    nextProgrammCard();
  }else if(finishPosition < -100){
    previousProgrammCard();
  }else{
    for(i = 0; i < programmCards.length; i++){
      programmCards[i].style.transform = initialPosition;
    }
  }
  isElementClicked = false;
  startPosition = 0;
  programmCards[0].style.cursor = 'grab';
}

programmSlider.addEventListener('mouseup', function(e) {
  programmSliderFunction();
});

programmSlider.addEventListener('touchend', function(e) {
  programmSliderFunction();
});

const progressScroll = document.getElementById('progressScroll');
progressScroll.addEventListener('click', function(event) {
  let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
  if (index >= 0) {
    for (let i = 0; i < progressCards.length ; i++) {
      progressCards[i].style.transform = `translateX(-${index}00%)`;
      progressPointer[i].style.background = white;
    }
    progressPointer[index].style.background = gold;
    currentProgressCard = index;
  }
});

const programmScroll = document.getElementById('programmScroll');
programmScroll.addEventListener('click', function(event) {
  let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
  if (index >= 0) {
    for (let i = 0; i < programmCards.length; i++) {
      programmCards[i].style.transform = `translateX(-${index}00%)`;
      programmPointer[i].style.background = white;
    }
    programmCards[index].style.display = 'flex';
    programmPointer[index].style.background = gold;
    currentProgrammCard = index;
  }
});