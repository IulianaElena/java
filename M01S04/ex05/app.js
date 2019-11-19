var i;

var divisor = prompt('Introdu un numar divizibil');
var limit = prompt('Limita superioara')

for (i = 0; i <= limit; i++) {
 
  console.log(i);

  if (i % divisor !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${limit}`);
}