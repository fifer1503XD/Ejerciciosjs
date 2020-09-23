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

const correos = [
    users[0].age,
    users[1].email,
    users[2].email
]
const facebookacounts = [
    users[0].social[0].url,
    users[1].social[0].url,
    users[2].social[0].url,
]
let name ='felipe'
let apellido ='ortiz'
alert('mi nombre comppleto es : '+name +' '+ apellido)
alert(correos)
alert(facebookacounts)
console.log(correos)
let ages=[];
for( var i=0; i<1 ;i++){
    ages[i]=[i];
   }
   for( var m=0; m<ages.length ;m++){
    alert('la posición '+m+' tiene el valor'+ages[m])
   }