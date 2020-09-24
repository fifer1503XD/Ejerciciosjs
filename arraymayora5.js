give();
pedirarray();
sum1(array);
sum2(array);
function give(){
for( var i=0; i<6; i=i){
    var num = prompt("indica el numero de posiciones del arreglo");
    i=num;
    if(i<6){
        alert("Escriba un numero mayor de 5");
    }
 }
}
function pedirarray(){
array=[];
for( var i=0; i<num ;i++){
    var num2 = prompt("indica el numero en la posicion "+i);
    c=parseInt(num2);
    array[i]=c;
 }
}
function sum1(data) {
    c=0;
    for( var i=0; i<5 ;i++){
        c= c+data[i];
    }
    alert('la suma de los números del arreglo sus primeras 5 posiciones es :'+c);
    return c; 
   }
   function sum2(data) {
    var d=0;
    for( var i=5; i<array.length ;i++){
        d= d+data[i];
    }
    alert('la suma de los números del arreglo sin sus primeras 5 posiciones es :'+d);
    return d; 
   }
