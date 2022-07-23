const chartLabels = document.querySelectorAll(".label");
const chartBars = document.querySelectorAll(".bar");
const chartAmount = document.querySelectorAll(".amount");


let count =0;
let highestAmountDay = 0;

fetch("./data.json")
.then(res => res.json())
.then(data => {
    
    
    for(let i = 0; i < data.length; i++){
        
        
        if(i>0 && data[i].amount > data[highestAmountDay].amount){
            highestAmountDay =i;
        }

        chartAmount[i].textContent = `$${data[i].amount}`
        chartLabels[i].textContent = data[i].day;
        chartBars[i].style.height = `calc(${data[i].amount}px * var(--scale))`;
        console.log(chartBars[i].style.height);
        
    }

    chartBars[highestAmountDay].style.backgroundColor = `var(--cyan)`;
    
});

chartBars.forEach(bar => {
    bar.addEventListener("mouseover", (e)=> {
        const index = [...chartBars].indexOf(bar);
        chartAmount[index].style.opacity = 1;
    })
    bar.addEventListener("mouseout", (e)=> {
        const index = [...chartBars].indexOf(bar);
        chartAmount[index].style.opacity = 0;
    })
})






