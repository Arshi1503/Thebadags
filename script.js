const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const reset = document.getElementById("btn-reset");
let iteration = 20;
let min = 7;
let max = 20;
let target = Math.floor(Math.random() * (max - min + 1)) + min +"CM";

btn.addEventListener("click", () => {
    const intervalid = setInterval(() => {
        if(iteration > 0){
            container.innerHTML = iteration + "CM";
            iteration--;
        }
        else{
            clearInterval(intervalid);
            container.innerHTML = target;
        }
        
    },100)
})

window.interval

reset.addEventListener("click", () => {
    container.textContent = "0CM";
    iteration = 20
    target = Math.floor(Math.random() * (max - min + 1)) + min +"CM";
})
