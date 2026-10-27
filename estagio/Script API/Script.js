async function buscarDados() {
  try {
    const resposta = await fetch("https://dummyjson.com/products/1");
    
    if (!resposta.ok) {
      throw new Error("Erro na API");
    }

    const dados = await resposta.json();
    
    // dados.notas é o array com as 3 notas
    /*const notas = dados.notas;
    
    console.log("Notas recebidas:", notas);

    // Calcular
    let soma = 0;
    for (let nota of notas) {
      soma += nota.valor;
      console.log(`${nota.nome}: ${nota.valor}`);
    }

    const media = soma / notas.length;

    console.log("-----------------");
    console.log(`Soma: ${soma}`);
    console.log(`Média: ${media.toFixed(2)}`);

    if (media >= 10) {
      console.log("Resultado: APROVADO ");
    } else {
      console.log("Resultado: REPROVADO ");
    }
*/
console.log("\n\n**********Dados da API***********\n")
console.log("Titulo: ", dados.title);
console.log("Decricao: ", dados.description);
console.log("Categoria: ", dados.category);
console.log("preco: ", dados.price);
console.log("rating: ", dados.rating);
console.log("stock: ", dados.stock);
console.log("tags: ", dados.tags);
console.log("brand: ", dados.brand);
console.log("weight:", dados.weight);
console.log("dimensions: ", dados.dimensions);
console.log("height: ", dados.height);
console.log("depth: ", dados.depth);
console.log("warrantyInformation: ", dados.warrantyinformation);
console.log("shippingInformation: ", dados.shippingInformation);
console.log("availabilityStatus: ", dados.availabilityStatus);
console.log("reviews: ", dados.reviews);
console.log("reviewerName: ", dados.reviewerName);
console.log("reviewerEmail: ", dados.reviewerEmail);
console.log("returnPolicy: ", dados.returnPolicy);

console.log("qrCode: ", dados.qrCode);
console.log("thumbnail: ", dados.thumbnail);
console.log("updatedAt: ", dados.updatedAt);
console.log("images: ", dados.images);
console.log("meta:", dados.meta);

console.log("*****************************\n\n\n")


  } catch (erro) {
    console.error("Erro ao executar...", erro.message);
  }
}

buscarDados();
