 //funcao síncrona executa  estritamente linha por linha. O programa fica completamente parado à espera que a tarefa demorada termine antes de avançar.
 //funcao síncrona serve para contas rápdas , coisas que não demoram.

function buscarDadosSincrono() {
    console.log("1. Iniciou a busca de dados...");
    
    // Simula uma paragem forçada de 2 segundos (bloqueia o sistema)
    const tempoFinal = Date.now() + 2000;
    while (Date.now() < tempoFinal) {} 
    
    console.log("2. Dados encontrados!");
}

buscarDadosSincrono();
console.log("3. Sistema continua a rodar outra coisa...");




  //funcao assíncrona executa uma coisa enquanto  espera e deixa o resto .
  // No modelo assíncrono, o programa inicia a tarefa demorada e continua a executar o resto do código imediatamente. Quando a tarefa demorada termina, o resultado é entregue.
   //funcao síncrona serve para coisas que demoram, como pegar dados dos servidores, internet, arquivos.  
   function buscarDadosAssincrono() {
    console.log("1. Iniciou a busca de dados...");
    
    // Simula uma tarefa em segundo plano que demora 2 segundos (não bloqueia)
    setTimeout(() => {
        console.log("2. Dados encontrados!");
    }, 2000);
}

buscarDadosAssincrono();
console.log("3. Sistema continua a rodar outra coisa...");
