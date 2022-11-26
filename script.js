word=document.getElementById('word')
text=document.getElementById('text')
scoreEl=document.getElementById('score')
timeEl=document.getElementById('time')
endgameEl=document.getElementById('end-game-conatiner')

words=['burek','cevapi','sto','stolica','racunar','laptop',
'kobasica','jovan','dusko','ptica','ekran','knjiga']
randomWord=''
score=0
time=10
timeInterval=setInterval(updateTime,1000)



function getRandomWord(){
    randomNum=Math.floor(Math.random()*words.length)
    return words[randomNum]
}
function placeRandomWord () {
    randomWord=getRandomWord()
    word.innerText=randomWord
}
function updateScore(){
    score++
    scoreEl.innerText=score
}
function updateTime(){
    time--
    timeEl.innerText=time +'s'

    if(time == 0){
        
        clearInterval(timeInterval)
        gameOver()
    
    }
}
function gameOver(){
    endgameEl.innerHTML=`
    <h1> Vreme je isteklo </h1>
    <p> Vas finalni rezultat je ${score}</p>
    <button onclick="location.reload()">Probaj ponovo</button>
    `
    endgameEl.style.display='flex'
}

placeRandomWord()

text.addEventListener('input', e=>{
    insertedText=e.target.value
    if(insertedText == randomWord){
        placeRandomWord()
        updateScore()
        text.value=''
        time +=4
        updateTime()
    } 
})
