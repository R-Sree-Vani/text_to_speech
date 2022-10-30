const inp=document.querySelector("#text-input");
const tarea=document.querySelector("textarea");
const form=document.querySelector("form");
const utterThis=new SpeechSynthesisUtterance();
const synth=window.speechSynthesis;
let ourText="";

form.onsubmit=(event)=> {
	event.preventDefault();
    if(tarea.value!=""){
	ourText=inp.value;
	utterThis.text=ourText;
	synth.speak(utterThis);
}
else{
	ourText="please type something";
	utterThis.text=ourText;
	synth.speak(utterThis);


}


}