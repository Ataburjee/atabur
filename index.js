// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",masaiLeague)
var masaiLeagueArr=JSON.parse(localStorage.getItem("schedule")) || []
function masaiLeague(){
event.preventDefault()


var masaiLeagueObj ={
    num :  masaiForm.matchNum.value,
    teamA : masaiForm.teamA.value,
    teamB : masaiForm.teamB.value ,
    date : masaiForm.date.value ,
    place : masaiForm.venue.value
}
masaiLeagueArr.push(masaiLeagueObj)
console.log(masaiLeagueArr)

localStorage.setItem("schedule",JSON.stringify(masaiLeagueArr))
window.location.href="matches.html"
}
