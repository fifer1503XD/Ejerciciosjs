function menu()
{

    ejercicio=prompt("indique cúal de los siguientes ejercicios quiere ver   \n1. Suma Numeros de un Array con n elementos  \n2. Numero En La Mitad del Array par o impar \n3. Ejercicio edades arreglo estudiantes academlo\n4. suma de los multiplos de 3 y 5 antes de 100 ");
    
    if (ejercicio==1)
       {
           sumaarray();
       }
    if (ejercicio==2)
       {
            numeromedio();
       }
    if (ejercicio==3)
       {
           ejercicioedades();
       }
    if (ejercicio==4)
     {
         multiplosde3y5();
     }
    
}
menu()

function sumaarray(){
    let c=0;
   var tamaño = prompt("indica el tamaño del arreglo");
    size=parseInt(tamaño);
    array=[];
        for( var i=0; i<size ;i++){
            var num = prompt("indica el numero en la posicion "+i);
            c=parseInt(num);
            array[i]=c;
        }
    function sum(data) {
        c=0;
        for( var i=0; i<data.length ;i++){
            c= c+data[i];
        }
        alert('la suma de los números del arreglo es :'+c);
        return c; 
       }
    sum(array)
}

function numeromedio(){
    let c=0;
   var tamaño = prompt("indica el tamaño del arreglo");
    size=parseInt(tamaño);
    array=[];
        for( var i=0; i<size ;i++){
            var num = prompt("indica el numero en la posicion "+i);
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
        alert('el número de la mitad es '+array[mid])
    }
    else{
        alert('los números de la mitad son '+array[mid-1] +' y '+array[mid])
    }
}

function ejercicioedades(){
    const users = [
        {
            name: 'Erik',
            age: 29,
            email: 'erik@academlo.com',
            social: [
                { name: 'facebook', url: 'facebook/erik' },
                { name: 'twitter', url: 'twitter/erik' }
            ]
        },
        {
            name: 'Georg',
            age: 33,
            email: 'georg@academlo.com',
            social: [
                { name: 'facebook', url: 'facebook/georg' },
                { name: 'twitter', url: 'twitter/georg' }
            ]
        },
        {
            name: 'Oscar',
            age: 31,
            email: 'oscar@academlo.com',
            social: [
                { name: 'facebook', url: 'facebook/oscar' },
                { name: 'twitter', url: 'twiter/oscar' }
            ],
        }
    ]
    var c=0;
    var ages= [];
    console.log(users[1].age)
    for( var i=0; i<users.length ;i++){
        ages[i]=users[i].age;
        c= c+ages[i];
    }
    var n, i, k, aux;
    n = ages.length;
    for (k = 0; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (ages[i] > ages[i + 1]) {
                aux = ages[i];
                ages[i] = ages[i + 1];
                ages[i + 1] = aux;
            }
        }
    }
    var promedio = c/ages.length;
    alert('el promedio de edades de los estudiantes de academlo es '+promedio)
    alert('la edad del menor es  '+ages[0]);
    alert('la edad del mayor es  '+ages[ages.length-1])
}

function multiplosde3y5(){
    var array=[],array2=[];
var total1=0,j=0,k=0,total2=0;
for( var i=3; i<100; i=i+3){
    array[j]=i;
    total1=total1+array[j];
    j=j+1;
}
for( var i=5; i<100; i=i+5){
    array2[k]=i;
    total2=total2+array2[k];
    k=k+1;
}
var totalmult=total1+total2;
alert('los multiplos de 3 antes de 100 son :'+array);
alert('la sumatoria de los  multiplos de 3 antes de 100 es :'+total1);
alert('los multiplos de 5 antes de 100 son :'+array2);
alert('la sumatoria de los  multiplos de 5 antes de 100 es :'+total2);
alert('la sumatoria de los  multiplos de 3 y 5 antes de 100 es :'+totalmult)  
}