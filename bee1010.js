const input = "12 1 5.30 \n16 2 5.10";
const lines = input.split('\n');

let total = 0.0;

for (i = 0; i < lines.length; i++ ){
    let entries = lines[i].split(" ");
    let units = parseFloat(entries[1]);
    let price = parseFloat(entries[2]);
    total = (price * units) + total;
     
}
console.log("VALOR A PAGAR: R$ " + total.toFixed(2)); 
