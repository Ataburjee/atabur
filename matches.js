// write js code here corresponding to matches.html
var matchesArr = JSON.parse(localStorage.getItem("schedule"))
console.log(matchesArr)
var favouritesArray=JSON.parse(localStorage.getItem("favourites")) || []
masaiMatch(matchesArr)

function masaiMatch(data){
    data.forEach(function(elem){
        console.log(elem)
        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText=elem.num
        var td2 = document.createElement("td")
        td2.innerText=elem.teamA
        var td3 = document.createElement("td")
        td3.innerText=elem.teamB
        var td4 = document.createElement("td")
        td4.innerText=elem.date
        var td5 = document.createElement("td")
        td5.innerText=elem.place
        var td6 = document.createElement("td")
        td6.innerText="favourite" ;
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            favFun(elem)
        });
    tr.append(td1,td2,td3,td4,td5.td5,td6)
    document.querySelector("tbody").append(tr)
    });

}

function favFun(elem){
    favouritesArray.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favouritesArray))
}