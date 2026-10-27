// Função que devolve uma promessa de café após 3 segundos
function passarCafeAssincrono() {
  return new Promise((resolve) => {
    console.log("☕ Começou a passar o café de forma assíncrona...");
    
    setTimeout(() => {
      resolve("☕ Café terminado!");
    }, 3000); // Aguarda em segundo plano sem travar nada
  });
}

// Uma função assíncrona precisa da palavra 'async'
async function rotinaAssincrona() {
  console.log("🚀 Início do pequeno-almoço assíncrono");

  // Iniciamos a promessa, mas NÃO colocamos 'await' imediatamente aqui
  // para permitir que o JavaScript faça outras coisas enquanto espera
  const promessaDoCafe = passarCafeAssincrono();

  console.log("🍞 Colocou o pão no prato (sem esperar pelo café!)");

  // Agora sim, esperamos o resultado final do café para terminar
  const resultadoCafe = await promessaDoCafe;
  console.log(resultadoCafe);

  console.log("🏁 Fim do pequeno-almoço");
}

rotinaAssincrona();
