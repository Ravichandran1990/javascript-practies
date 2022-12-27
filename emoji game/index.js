
const emojiArr = [
    '9996',
    '129501',
    '129500',
    '129498',
    '129497',
    '129496',
    '129495',
    '129494',
    '129493',
    '129492',
    '129491',
    '129490',
    '129491',
    '129490',
    '129489',
    '129342',
    '129341',
    '129337',
    '129336',
    '129335',
    '129334',
    '129333',
    '129332',
    '129331',
    '129329',
    '129328',
    '129318',
    '129311',
    '129310',
    '128716',
    '128704',
    '128694',
    '128693',
    '128675',
    '128588',
    '128583',
    '128582',
    '128135',
    '128581',
    '128373',
    '128129',
    '128124',
    '128117',
    '128115',
    '128114',
]

const row = 4;
const column = 4;
const min = 0;
const max = emojiArr.length - 1;
let maxattempts = 0;
let setMaxAttempts = 35;
let winner = 0;
const attempts = document.querySelector('.attempts');
const emojiContainer = document.querySelector('.emojiContainer');
for (let i = 0; i < row; i++) {
     for (let j = 0; j < column; j++) {
        const div1 = document.createElement("div");        
        div1.setAttribute('data-i', i);
        div1.setAttribute('data-j', j);
        (i+j)%2 === 0 ? div1.classList.add('even') : div1.classList.add('odd');        
        emojiContainer.appendChild(div1);
        setListener( div1 );
     }    
}

const emojiContainerDiv = document.querySelectorAll('.emojiContainer div');
let emojiIndexedArray;
emojiSetData();
function emojiSetData() {
    emojiIndexedArray = [];
    for (let index = 0; index < emojiContainerDiv.length - 8; index++) {
        const index = getRandomBoxElem();
        emojiIndexedArray.push(index);
        emojiIndexedArray.push(emojiContainerDiv.length - index);
        const emojiNo = "&#"+getRandomEmojiNo();
        spanEmojiEle(emojiContainerDiv[index], emojiNo);  
        spanEmojiEle(emojiContainerDiv[(emojiContainerDiv.length - 1) - index], emojiNo);  
    }
}

function spanEmojiEle(ele, emoji) {
    const span = document.createElement("span");
    span.setAttribute('data-emoji', emoji);
    ele.appendChild(span);
}

function getRandomBoxElem() {
    const index = Math.round(Math.random() * (7 - 0)) + 0;
    return emojiIndexedArray.indexOf(index) === -1 ? index : getRandomBoxElem();
}
function getRandomEmojiNo() {
    const index = Math.round(Math.random() * (max - min)) + min;
    return emojiArr[index] === 'undefined' ? getRandomEmojiNo() : emojiArr[index];
}

let clickCount = 0;
function setListener( el ) {
    // Dynamic elements event listener
    el.addEventListener( 'click', function(event) {
        const objectVal = Object.values(event.target.classList);
        if(objectVal.indexOf('selected') === -1 && objectVal.indexOf('matched') === -1 && event.target.innerText === '') {
            randomEmojiSetter(event.target);
            maxattempts++;
            attempts.querySelector('span').innerHTML = maxattempts;
            reachedMaxAttempts()
        }        
    });
}


function randomEmojiSetter(event) {
    clickCount++;
    event.classList.add('selected');
    const spanEle = event.querySelector('span');
    const emoji = spanEle.getAttribute('data-emoji');
    spanEle.innerHTML = emoji;

    if(clickCount >= 2) {
        clearEmojiData();
        clickCount = 0;
    }
    
}
let timer;
function clearEmojiData() {
    const emojiData = document.querySelectorAll('.emojiContainer div.selected');
    const selected1 = emojiData[0].querySelector('span').innerHTML;
    const selected2 = emojiData[1].querySelector('span').innerHTML;
    if(selected1 === selected2) {
        winner++;
        emojiData[0].classList.add('matched');
        emojiData[1].classList.add('matched');
        if(winner === 8) {
            document.querySelector('.winner').innerHTML = 'You won the game click on the link for <a href="http://virantechnology.com"> Sign Up Now </a>'
        }
    }
    for (let index = 0; index < emojiData.length; index++) {         
        emojiData[index].classList.remove('selected');
        if(selected1 !== selected2) {
            removeSelector(emojiData[index]);            
        }      
    }
}

function removeSelector(event) {       
    timer = setTimeout(() => {
        event.querySelector('span').innerHTML = "";
    }, 1000);   
}

function reachedMaxAttempts() {
    if(maxattempts > setMaxAttempts) {        
        document.querySelector('.maxattempts').innerHTML = "You reached maximum attempts. You loose the game. try to to re-attempt."
        setTimeout(() => {
            document.querySelector('.maxattempts').innerHTML = "";
            window.location.reload('/');
        }, 2000)
    }   
}