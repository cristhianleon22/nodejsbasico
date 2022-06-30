function hola(nombre) {
    return new Promise(function(resolve, rejecct){
        setTimeout(function() {
            console.log("Hello, " + nombre);
            resolve(nombre);
          }, 1000);
    });
   
  }
  function hablar(nombre) {
    return new  Promise(function(resolve,rejecct){
        setTimeout(function() {
            console.log("bla, bla, bla, bla");
            //resolve(nombre);
            rejecct('hay un error');
          }, 1000);
    })
   
  }
  function adios(nombre) {
    return new Promise(function(resolve,rejecct){
        setTimeout(function() {
            console.log("Adios", nombre);
            resolve(nombre);
          }, 1000);
    })
    
  }

  //------------------------------

console.log('iniciando proceso');
hola('cristhian')
    .then(hablar) 
    .then(hablar) 
    .then(hablar)
    .then(hablar) 
    .then(adios)
    .then((nombre)=>{
        console.log('terminado el proceso');   
    })
    .catch(error =>{
        console.error('ha habido un error:');
        console.error(error);
    })