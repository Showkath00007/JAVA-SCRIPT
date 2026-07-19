let btn = document.querySelector("button");
let div = document.querySelector("div");
btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let random_color = random(); 
    h1.innerText = random_color;
    h1.style.color = random_color;
    // btn.style.backgroundColor = random_color;
    div.style.backgroundColor = random_color;
    console.log("color updated");



})
let random = function(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let random1 = `RGB(${red},${green},${blue})`;
    return random1;
}
