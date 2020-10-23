window.onload = function(){

	
var slike=["prvaa.jpeg","slika2.jpeg","slika3.jpeg","slika4.jpeg"];
var alt=["sneakers1","sneakers2","sneakers3","sneakers4"];
var galerija=document.getElementById("drugi");
for(var i=0;i<slike.length;i++){
	galerija.innerHTML+="<img alt='" +alt[i]+  " ' src='./images/" +slike[i]+" '/>";

}
}
var tekstovi=["Black friday is comming to our city. "
,"Please prepare for the best purchase of the year."
 ,"Our best product is at ultra-low prices",
 " Surprise your lovedones with our special sneakers, and make them happy"];


var al = document.getElementById("tekstTour");
for( var i=0; i < tekstovi.length; i++){
    al.innerHTML += "<p>" + tekstovi[i] + "</p>";
}

$("#tekstTour p ").animate({fontSize:"19px" } , "linear");
