let totalItems = parseInt(gets());

let itens = []
for (let i = 0; i < totalItems; i++) {
  let linha = gets();
  let produtos = linha.split(" ").sort();
  let itensUnicos = [];
  let ultimo = "";
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] != ultimo) {
        itensUnicos.push(produtos[i]);
    }
    ultimo = produtos[i];
  }

  let resposta = itensUnicos.join(" ");
  console.log(resposta);

}