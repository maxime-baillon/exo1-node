const infodemoi = require('./information.js');
const cowsay = require ("cowsay");

console.log( infodemoi );
console.log ( cowsay.say ({
    text : `${infodemoi.prenom} ${infodemoi.campus}`,
    e: "oO",
    t: "U"
}));