var input = document.getElementById("angka");

function fung1() {
	
}

function myFungsi() {
	'use strict';
  var ang = input.value;
  var batas = Math.floor(Math.sqrt(ang));
	var kotak = document.getElementsByClassName("body");
	var rtn = document.createElement("p");
    rtn.setAttribute('id', 'rtn');
    
    var rtnText = document.createTextNode("Angka 1 bukan bilangan Prima!");
    rtn.appendChild(rtnText);
    
    kotak.appendChild(rtn);
  
  if (ang === 1) {
    return kotak.appendChild(rtn);
  } else {}
}