var n = parseInt(gets());

while (n > 0) {
  var c = parseFloat(gets());
  let dias = 0;
  
  while (c > 1.0) {
    c /= 2;
    dias++;
  }
  
  console.log(`${dias} dias`);
  n--;
}