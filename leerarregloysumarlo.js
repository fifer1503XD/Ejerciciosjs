let c=0;
   var tamaño = prompt("indica el tamaño del arreglo");
    document.write(tamaño);
    size=parseInt(tamaño);
    array=[];
        for( var i=0; i<size ;i++){
            var num = prompt("indica el numero en la posicion "+i);
            document.write (num);
            c=parseInt(num);
            array[i]=c;
        }
    function sum(data) {
        c=0;
        for( var i=0; i<data.length ;i++){
            c= c+data[i];
        }
        console.log('la suma de los números del arreglo es :'+c);
        return c; 
       }
    sum(array)
  