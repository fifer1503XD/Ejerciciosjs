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
        age: 35,
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