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
        return c; 
       }
    sum(array)
    var mid= size/2;
    mid=Math.trunc(mid);
    if((size%2)==1){
        console.log('el número de la mitad es '+array[mid])
    }
    else{
        console.log('los números de la mitad son'+array[mid-1] +' y '+array[mid])
    }