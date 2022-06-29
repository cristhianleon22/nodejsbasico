//cristhian leon

function soyAsincrona(){
    //console.log('hola, soy una funcion asincrona');
    setTimeout(function(){
        console.log('soy asincrona ');
    },1000);

}
console.log('iniciando proceso');
soyAsincrona();
console.log('terminando proceso');