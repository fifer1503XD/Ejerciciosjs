var array=[],array2=[];
var total1=0,j=0,k=0,total2=0;
for( var i=3; i<1000; i=i+3){
    array[j]=i;
    total1=total1+array[j];
    j=j+1;
}
for( var i=5; i<1000; i=i+5){
    array2[k]=i;
    total2=total2+array2[k];
    k=k+1;
}
var totalmult=total1+total2;

alert('la sumatoria de los  multiplos de 3 y 5 antes de 1000 es :'+totalmult)  