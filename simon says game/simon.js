let userseq = [];
let gameseq = [];
let btns = ["first", "second", "third", "fourth"];
let started = false;
let highScore = 0;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
})
function btnflash(box){
    box.classList.add("flash");
    setTimeout(function(){
        box.classList.remove("flash")
    },250)
}
function userflash(box){
    box.classList.add("userflash");
    setTimeout(function(){
        box.classList.remove("userflash")
    },250)
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let random = Math.floor(Math.random()*3);
    let color = btns[random];
    let rndbtn = document.querySelector(`.${color}`);
    btnflash(rndbtn);
    gameseq.push(color);
    // console.log(gameseq);
}
function checkans(lev){
    if(userseq[lev] === gameseq[lev]){
        if(userseq.length === gameseq.length){
            setTimeout(levelup,1000);

        }
    }else{
        if (level > highScore) {
            highScore = level;
        }
        h2.innerHTML= `gameover bro! <b> your score is ${level}</b> <hr> high score is ${highScore}<br> <hr> press any key to start again! `;
        let body = document.querySelector("body");
        body.style.backgroundColor = ("red");
        setTimeout(function(){
            body.style.backgroundColor = ("white");
        },150)
        let highscore = 0;

        
        reset();


    }
}
function button(){
    let btn = this;
    // console.log(btn);
    userflash(btn);

    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);
    // console.log(userseq);
    checkans(userseq.length-1);
}
let btnss = document.querySelectorAll(".box");
for(btn of btnss){
    btn.addEventListener("click",button)
}
function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}

