var cajatxt = document.getElementById('cajatxt');
var boton = document.getElementById('boton');

var mercurio = document.getElementById('mercurio');
var venus = document.getElementById('venus');
var marte = document.getElementById('marte');
var jupiter = document.getElementById('jupiter');
var saturno = document.getElementById('saturno');
var urano = document.getElementById('urano');
var neptuno = document.getElementById('neptuno');
var pluton = document.getElementById('pluton');

boton.addEventListener('click', calcularPeso);

function calcularPeso()
{
  var peso_user = cajatxt.value;

  if (peso_user >= 1)
  {
    var peso_mercurio = peso_user * gravedad.MERCURIO / gravedad.TIERRA;
    mercurio.value = peso_mercurio.toFixed(1) + " Kg";
    var peso_venus = peso_user * gravedad.VENUS / gravedad.TIERRA;
    venus.value = peso_venus.toFixed(1) + " Kg";
    var peso_marte = peso_user * gravedad.MARTE / gravedad.TIERRA;
    marte.value = peso_marte.toFixed(1) + " Kg";
    var peso_jupiter = peso_user * gravedad.JUPITER / gravedad.TIERRA;
    jupiter.value = peso_jupiter.toFixed(1) + " Kg";
    var peso_saturno = peso_user * gravedad.SATURNO / gravedad.TIERRA;
    saturno.value = peso_saturno.toFixed(1) + " Kg";
    var peso_urano = peso_user * gravedad.URANO / gravedad.TIERRA;
    urano.value = peso_urano.toFixed(1) + " Kg";
    var peso_neptuno = peso_user * gravedad.NEPTUNO / gravedad.TIERRA;
    neptuno.value = peso_neptuno.toFixed(1) + " Kg";
    var peso_pluton = peso_user * gravedad.PLUTON / gravedad.TIERRA;
    pluton.value = peso_pluton.toFixed(1) + " Kg";
  }

  else
  {
    alert("Por favor, introduce un numero mayor a 0");
  }

}

var gravedad = {TIERRA: 9.8, MERCURIO: 3.7, VENUS: 8.87, MARTE: 3.7, JUPITER: 24.8, SATURNO: 10.45, URANO: 8.7, NEPTUNO: 11.15, PLUTON: 0.6};

// efecto de scroll

jQuery(document).ready(function(){
$('h2').append('<a href="#top" class="gototop">Subir</a>');
linkInterno = $('a[href^="#"]');
linkInterno.on('click',function(e) {
e.preventDefault();
var href = $(this).attr('href');
$('html, body').animate({ scrollTop : $( href ).offset().top }, 'easeInOutExpo');
});
});

// Menu 

var burguerButton = document.getElementById("burguer");
var menu = document.getElementById("menu");

burguerButton.addEventListener("touchstart", open)

function open() {
  burguerButton.classList.toggle("icon-x");
  menu.classList.toggle("active");
}