function fazerCafeSincrono() {
  console.log("☕ Começou a passar o café...");
  
  // Simulação de um bloqueio pesado (trava a thread do JS)
  const tempoEspera = Date.now() + 3000; // 3 segundos
  while (Date.now() < tempoEspera) {
    // A thread única fica 100% presa aqui dentro
  }
  
  console.log("☕ Café terminado!");
}

function rotinaSincrona() {
  console.log("🚀 Início do pequeno-almoço síncrono");
  
  fazerCafeSincrono(); // O código TRAVA aqui por 3 segundos
  
  console.log("🍞 Colocou o pão no prato."); // Só executa depois do café
  console.log("🏁 Fim do pequeno-almoço");
}

rotinaSincrona();
