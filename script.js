const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(id && teachers[id]){
document.getElementById("teacher").innerText =
"Respected " + teachers[id];
}

// countdown
var eventDate = new Date("Apr 15, 2026 10:00:00").getTime();

setInterval(function(){

var now = new Date().getTime();
var distance = eventDate - now;

var days = Math.floor(distance / (1000*60*60*24));

let cd = document.getElementById("countdown");
if(cd){
cd.innerHTML = days + " days left for the event";
}

},1000);

// signature pad
let signaturePad;

window.onload = function(){

const canvas = document.getElementById("signature");
signaturePad = new SignaturePad(canvas);

}
function clearSign(){
signaturePad.clear();
}

function submitSign(){

if(signaturePad.isEmpty()){
alert("Please sign before accepting invitation");
return;
}

const name = teachers[id];

// telegram
const token = "8658392704:AAGPui4abxdTL1HjNdmJxJhTVLT6Um3Og-Y";
const chat_id = "5083324379";

const message = name + " has accepted the Bazaar-O-Nomics invitation.";

fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`);

// attendance save
localStorage.setItem("attendance_"+id,"present");



alert("Thank you! Attendance recorded.");

}
function openInvite(){

document.querySelector(".envelope").style.display="none";

document.getElementById("inviteCard").style.display="block";

setTimeout(function(){

document.getElementById("scrollLetter").classList.add("open");

},300);

}

// make functions accessible to HTML onclick
window.openInvite = openInvite;
window.clearSign = clearSign;
window.submitSign = submitSign;
