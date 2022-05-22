document.getElementById("rate-page").style.display='block';
document.getElementById("thank-you-state").style.display='none';

const btn = document.getElementById("btn")
btn.addEventListener("click", function(){
    document.getElementById("rate-page").style.display='none';
    document.getElementById("thank-you-state").style.display='block';
})

const rate = [document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"), document.getElementById("5")]

var i = 0
while (i < 5){
    var clicked = rate[i]
    clicked.addEventListener("click", function(){
        var x = 0
        while (x < rate.length){
            var y = 0 
            while (y < rate[x].classList.length){
                if (rate[x].classList[y] == "clicked"){
                    rate[x].classList.remove("clicked")
                }
                y++
            }
            x++
        }
        var currentRate = this.id
        console.log(currentRate)
        var item = document.getElementById("rate")
        item.innerHTML = currentRate
        console.log(item)
        this.classList.add("clicked")
    })
    i++
}