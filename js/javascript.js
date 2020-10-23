window.onload = function(){

	document.getElementById("posalji").addEventListener("click", prov);
	document.getElementById("name1").focus();
	ucitavanje();
	ucitavanje1();
}
window.addEventListener("load", popuniSportove);

window.addEventListener("load", slajder);
var index =0;

function slajder(){
	var i;
	var slajdovi= document.getElementsByClassName("show");
	for(i=0;i<slajdovi.length;i++){
		slajdovi[i].style.display="none";  
	}
	index++;
	if(index>slajdovi.length){
		index=1
	}
	slajdovi[ index-1].style.display="block";
	setTimeout(slajder,1000);
	
}
function popuniSportove(){
	
	var sportovi, ispis;

	sportovi = ["Footbal", "Basketball", "Running"];

	ispis = "<select id='spo'>";
	ispis +="<option value='0'name='spe'>Choose</option>";

	for(var i =0; i < sportovi.length; i++){
		ispis += "<option value='" + sportovi[i] + "'>" + sportovi[i] + "</option>";
	}
	ispis += "</select>";
	document.getElementById("smee").innerHTML = ispis;
}


function prov(){
var nizG = [];
var nizOK = [];
var ime = document.getElementById("name1");
var email = document.getElementById("mejl");
var gen = document.getElementsByName("gender");
var odabrano = "";
for(var i = 0; i < gen.length; i++){

		if(gen[i].checked){
			odabrano = gen[i].value;
			break;
		}

	}
var sportovi = document.getElementsByName("spe");
	var iizbor = "";

	for(var i = 0; i < sportovi.length; i++){

		if(sportovi[i].checked){
			iizbor += sportovi[i].value + " ";
			console.log(iizbor);
		}
	}
var reIme = /^[A-Z]{1}[a-z]+$/;
var reEmail = /^[a-z]+\.[a-z]+\.([1-9][0-9]{0,3})\.(1[0-8])\@ict\.edu\.rs$/;


if(ime.value.match(reIme)){
	document.querySelector("#nameg").innerHTML="";
	
}
else{
	 document.querySelector("#nameg").innerHTML="Not valid name";
	  
	
}
if(email.value.match(reEmail)){
	document.querySelector("#mejlg").innerHTML = "";   
	
}
else{
	document.querySelector("#mejlg").innerHTML="Not valid email";
	
}
if(odabrano == ""){
		
	document.querySelector("#radiog").innerHTML="Choose gender";
		
	}
	else{
		document.querySelector("#radiog").innerHTML="";
		
	}
if(iizbor =="0"){
		document.querySelector("#checkg").innerHTML="Choose sport";
		
		
	}
	else {
		document.querySelector("#checkg").innerHTML="";
	}
	
}
function ucitavanje() {
var slike=["1.png","2.png","3.png"];
var alt=["slika1","slika2","slika3"];
var galerija=document.getElementById("tekst");
for(var i=0;i<slike.length;i++){
	galerija.innerHTML+="<img alt='" +alt[i]+  " ' src='./images/" +slike[i]+" '/>";
}
}

