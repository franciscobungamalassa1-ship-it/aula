let contador = 1;

// Executa a função a cada 1 segundo (1000ms)
const intervaloId = setInterval(() => {
  console.log(`🔄 Contador: ${contador} segundo(s)`);
  contador++;

  // Condição para parar o loop (quando chegar a 5 segundos)
  if (contador > 5) {
    clearInterval(intervaloId); // Para o setInterval
    console.log("🛑 Intervalo parado com sucesso.");
  }
}, 1000);
