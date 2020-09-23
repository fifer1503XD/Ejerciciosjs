var ages3 = [1,2,3];
var ages4 = [1,2,3,4];
   function sum(data) {
    let c=0;
    for( var i=0; i<data.length ;i++){
        c= c+data[i];
    }
    console.log(c);
    return c; 
   }
   var totalages3= sum(ages3)
   var totalages4= sum(ages4)
   console.log(totalages3+totalages4)