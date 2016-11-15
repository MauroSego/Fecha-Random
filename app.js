$(document).ready(function(){
	$('#btn').click(crearRandom)
  var meses = []
  var anios = []

  function meterAnios () {
  for (i=2002; i < 2016; i++){
    anios.push(i);
  }}

  function meterMeses () {
  for (i=1; i < 13; i++){
    meses.push(i);
  }}

  meterMeses()
  meterAnios()

  function crearRandom(){
    var dia = Math.round(Math.random()*100);
    var mesRandom = Math.round(Math.random()*10);
    var mes =  meses[mesRandom];
    var aniosRandom = Math.round(Math.random()*10);
    var anio = anios[aniosRandom];

    if(dia == 0){
      dia++;
      return dia;
    }

    if(dia > 30){
      dia = Math.round(dia / 3);
        if(dia > 31){
          dia /= 1.5;
        return dia;
        }
    }
    $('#resultado').empty();
    var resultado = 'Fecha: ' + dia + '/' + mes + '/' + anio;
    $('#resultado').append("<p>"+resultado+"</p>")
    console.log(resultado);
  }

});

