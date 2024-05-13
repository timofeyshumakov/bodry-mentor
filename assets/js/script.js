var progressCards = document.getElementsByClassName("progress-card");
var programmCards = document.getElementsByClassName("programm-card");

var pointer = document.getElementsByClassName("progress__scroll-point");
let currentProgressCard = 0;


for(let i = 1; i < progressCards.length; i++){
    progressCards[i].style.display = "none";
}

for(let i = 1; i < programmCards.length; i++){
    programmCards[i].style.display = "none";
}

function previousProgressCard() {
    if(currentProgressCard > 0){
        progressCards[currentProgressCard].style.display = 'none';
        currentProgressCard--;
        progressCards[currentProgressCard].style.display = 'flex';
        pointer[currentProgressCard + 1].style.background = '#fff';
        pointer[currentProgressCard].style.background = 'rgb(255, 232, 178)';
      }
}
function nextProgressCard() {
    if(currentProgressCard < progressCards.length - 1){
        progressCards[currentProgressCard].style.display = 'none';
        currentProgressCard++;
        progressCards[currentProgressCard].style.display = 'flex';
        pointer[currentProgressCard - 1].style.background = '#fff';
        pointer[currentProgressCard].style.background = 'rgb(255, 232, 178)';
      }
}
const progressScroll = document.getElementById('progressScroll');
progressScroll.addEventListener('click', function(event) {
      let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
      for (let i = 0; i < progressCards.length; i++) {
        progressCards[i].style.display = 'none';
        pointer[i].style.background = '#fff';
      }
      progressCards[index].style.display = 'flex';
      pointer[index].style.background = 'rgb(255, 232, 178)';
    
  });
  const programmScroll = document.getElementById('programmScroll');
  programmScroll.addEventListener('click', function(event) {
        let index = Array.prototype.indexOf.call(event.currentTarget.children, event.target);
        for (let i = 0; i < programmCards.length; i++) {
          programmCards[i].style.display = 'none';
          pointer[i].style.background = '#fff';
        }
        programmCards[index].style.display = 'flex';
        pointer[index].style.background = 'rgb(255, 232, 178)';
      
    });