const dnis = new Map([
    ['12345678A', 'Carlos Pérez'],
    ['23456789B', 'María Gómez'],
    ['34567890C', 'Javier Fernández'],
    ['45678901D', 'Ana Martínez'],
    ['56789012E', 'Lucía Rodríguez']
]);

console.log(dnis);

dnis.set('34567890C', 'Alejandro');

console.log(dnis);