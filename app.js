$(document).ready(function(){
  var meses = []
  var anio;
  var papeles = [
    "APBR",
    "GGAL",
    "ERAR",
    "AGRO",
    "ALUA",
    "BMA",
    "CELU",
    "CRES",
    "CTIO",
    "MIRG",
    "PAMP",
    "TRAN",
    "TS",
    "YPFD"
  ]
  var ticker

  $('#btn').click(crearRandom)

  function randomArbitrary(min, max){
    /*var min = 0;
    var max = papeles.length;*/
    var randomPapel =  Math.round(Math.random() * (max - min) + min);
    //return randomPapel
    ticker = papeles[randomPapel];
    //console.log('Papel: ' + papeles[randomPapel])
    //$('.resultado').append("<p>Papel: "+papeles[randomPapel]+"</p>")
    return ticker

  }

  function randomAnio(min, max){
    anio = Math.round(Math.random() * (max - min) + min)
    return anio
  }


  function meterMeses () {
  for (i=1; i < 13; i++){
    meses.push(i);
  }}

  meterMeses()

  function crearRandom(){
    var dia = Math.round(Math.random()*100);
    var mesRandom = Math.round(Math.random()*10);
    var mes =  meses[mesRandom];
    randomAnio(2002, 2016);
    console.log(anio)

    var cantPapeles = papeles.length - 1;
    randomArbitrary(0, cantPapeles);
    console.log(ticker)

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
    $('.resultado').append("<p>"+resultado+"</p><p>Papel: "+ticker+"</p>")
    //console.log(papeles[randomPapel])
  }

});

