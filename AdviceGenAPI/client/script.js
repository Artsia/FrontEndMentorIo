
const axios = require('Axios');
const adviceId ="";
const advice ="";

function generateAdvice(){

    axios.get('https://api.adviceslip.com/advice')
    .then((response)=>{
        adviceId = response.data.slip.id;
        advice = response.data.slip.advice;

        document.getElementById("adviceIdentifier").innerHTML="Advice # "+adviceId;
        document.getElementById("adviceResponse").innerHTML="\""+advice+"\"";
    })
    .catch((err)=>{console.log(err)})
    
}

