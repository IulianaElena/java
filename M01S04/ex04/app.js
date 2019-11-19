var i;

//i++
//i = i + 1
//i += 1
for (i = 1; i <= 100; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i); 
}
