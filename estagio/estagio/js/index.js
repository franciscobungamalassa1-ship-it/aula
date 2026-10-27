 async function receberDados() {
    try {
        const response = await fetch('http://localhost:3000/api/dados');
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.status);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro ao receber dados:', error);
    }
}
receberDados();