var levelTime = document.querySelector('#levelTime');
var timeLeft = document.querySelector('#timeLeft');
var option = document.querySelector('#level');
var wordUI = document.querySelector('#wordUI');
var msg = document.querySelector('#msg');
var scoreUI = document.querySelector('#score');
var userInputUI = document.querySelector('#userInputUI');

var isPlay;
var score = 0;


const levels = {
 easy: 5,
 medium: 3,
 hard: 2
}

const currentLevel = levels.easy;
var time = currentLevel;

var words = [
 'go',
 'went',
 'attend',
 'ceremony',
 'win',
 'kill',
 'elephant',
 'house',
 'champion',
 'leave',
 'wedding',
 'uncle',
 'success',
 'favour',
 'franklin',
 'bright',
 'solomon',
 'paul',
 'isaac',
 'vivian',
 'table',
 'car',
 'monkey',
 'typing',
 'sliding',
 'racecar',
 'broken',
 'sticks',
 'seth',
 'jude',
 'prosper',
 'friday',
 'chitech',
 'bedroom',
 'dancing',
 'celebration',
 'memorizing',
 'sleeping',
 'cosmetics',
 'bookshop',
 'portfolio',
 'mob',
 'resturant',
 'market',
 'easter',
 'computer',
 'candy',
 'phone',
 'rain',
 'sunshine',
 'dishes',
 'sink',
 'shower',
 'tub'
]

const changeLevel=()=>{
 var level = document.getElementById('level');
 if(level== 1){
  console.log('level 1')
 }else if(change == 2){
  console.log('level 2')
 }
}

const showWord=(words)=>{
 const randomIndex = Math.floor(Math.random()*words.length);
 // Output random words
 wordUI.innerHTML = words[randomIndex];
}

const countdown=()=>{
 //Make sure time is not run out
 if(time>0){
  time--;
  isPlay = true;
 }else if(time === 0){
  isPlay = false;
 }
 timeLeft.innerHTML = time;
}

//check game status

const matchWords=()=>{
 if(wordUI.innerHTML === userInputUI.value){
  msg.innerHTML = 'Correct';
  userInputUI.value = '';
  return true;
 }else{
  msg.innerHTML = '';
  return false;
 }
}

const checkStatus=()=>{
 if(!isPlay && time === 0){
  msg.innerHTML = 'Game Over!!!';
  score = -1;
 }
 // scoreUI.innerHTML = 0;
}


const startMatch=()=>{
 if(matchWords()){
  isPlay = true;
  time = currentLevel + 1;
  showWord(words);
  score++;
 }

 // if score is -1, display 0
 if(score === -1){
  score = 0; 
 }
 scoreUI.innerHTML = score;
}

const init=()=>{
 // Load words from array
 showWord(words);
 // call countdown every second
 setInterval(countdown,1000);
 //check game status
 setInterval(checkStatus, 50);
 //start matching on word input
 userInputUI.addEventListener('input', startMatch)
}

window.addEventListener('load', init);