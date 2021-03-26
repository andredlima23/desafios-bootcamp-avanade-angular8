const n = parseInt(gets());
var v = new Array(n);
for (let i=0;i < n;i++){
  v[i] = parseInt(gets());
}

const rafael  = Number(v.shift());

let  first = true;

for(let i = 0; i < n;i++) {
  const item  = Number(v[i]);
  
  if ( item > rafael ) {
    first = false;
  }
};

console.log(first ? "S" : "N");