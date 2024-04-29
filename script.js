function fun(){
  document.getElementById("drop-down").classList.toggle("click-hide")
}
let tmt = setInterval(()=>{
  let txt = document.getElementById("Time")
  let Curr = document.getElementById("curr-time")
  let date= new Date()
  let time = date.toDateString()
  txt.innerHTML=  time
  let Curr_hour = date.getHours()
  let Curr_min = date.getMinutes()
  let Curr_sec = date.getSeconds()
  Curr.innerHTML=Curr_hour+":"+Curr_min+":"+Curr_sec
},1000)
console.log(tmt)
