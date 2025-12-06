function updateTime() {
//Los Angeles
let losAngelesElement = document.querySelector("#los-angeles");
losAngelesDateElement = losAngelesElement.querySelector(".date");
losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("dddd, MMMM Do, YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format( "h:mm:ss [<small>]A[</small>]");

//Paris
let parisElement = document.querySelector("#paris");
parisDateElement = parisElement.querySelector(".date");
parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("dddd, MMMM Do, YYYY");
parisTimeElement.innerHTML = parisTime.format( "h:mm:ss [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1000);


