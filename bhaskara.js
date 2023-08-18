let primeiro = 2;
let segundo = 5;
let terceiro = 3;
let delta;

if (primeiro === 0){
    console.log("Impossivel calcular");
} else {
delta  = (segundo * segundo) - 4 * primeiro * terceiro;

let raizDelta = delta;

while (raizDelta > 1){
    raizDelta = raizDelta/2;
}

if (raizDelta < 0){
    console.log("Impossivel calcular");
} else {
let raizUm = -(segundo - raizDelta) / (2 * primeiro);
let raizDois = -(segundo + raizDelta) / (2 * primeiro);
console.log("R1 = " + raizUm);
console.log("R2 = " + raizDois);
}
}
