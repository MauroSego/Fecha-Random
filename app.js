$(document).ready(function(){
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
  var ticker;

  $('#btn').click(crearRandom)

  function randomPapeles(min, max){
    var randomPapel =  Math.round(Math.random() * (max - min) + min);
    ticker = papeles[randomPapel];
    return ticker

  }

  function randomAnio(min, max){
    anio = Math.round(Math.random() * (max - min) + min)
    return anio
  }

  function randomMes(min, max){
    mes = Math.round(Math.random() * (max - min) + min)
    return mes
  }

  function randomDia(min, max){
      dia = Math.round(Math.random() * (max - min) + min)
      return dia
    }  

  function crearRandom(){
    randomAnio(2002, 2016);
    randomMes(1, 12);
    randomDia(1, 31);

    var cantPapeles = papeles.length - 1;
    randomPapeles(0, cantPapeles);
    console.log(ticker)

    if(dia>31)
      alert('Error!!')

    $('#resultado').empty();
    var resultado = 'Fecha: ' + dia + '/' + mes + '/' + anio;
    $('.resultado').append("<p>"+resultado+"</p><p>Papel: "+ticker+"</p>")
  }

});

