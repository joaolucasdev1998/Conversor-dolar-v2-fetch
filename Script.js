const btn = document.getElementById('btnConverter');
const input = document.getElementById('valorDolar');
const resultado = document.getElementById('resultado');
const erro = document.getElementById('erro');
const loading = document.getElementById('loading');
const info = document.getElementById('infoCotacao');

btn.addEventListener('click', async () => { // async = função pode esperar
    erro.textContent = ''; // Limpa erro antigo
    resultado.textContent = ''; // Limpa resultado antigo
    loading.classList.remove('hidden'); // Mostra "Buscando cotação..."
    
    try { // Tenta executar o código
        const resposta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL'); // await = espera a API responder
        if (!resposta.ok) throw new Error('API fora do ar'); // Se deu erro HTTP, joga erro
        
        const dados = await resposta.json(); // await = espera converter pra JSON
        const cotacao = parseFloat(dados.USDBRL.bid); // Pega o valor de compra e transforma em número
        const valorDolar = parseFloat(input.value); // Pega valor digitado
        
        if (isNaN(valorDolar)) throw new Error('Digite um número válido'); // Valida input
        
        const convertido = valorDolar * cotacao; // Calcula
        resultado.textContent = `R$ ${convertido.toFixed(2)}`; // Mostra resultado
        info.textContent = `Cotação: R$ ${cotacao.toFixed(2)} | Atualizado agora`; // Mostra info
        
    } catch (e) { // Se qualquer linha do try der erro, cai aqui
        erro.textContent = `Erro: ${e.message}`; // Mostra o erro na tela
    } finally { // Sempre executa, dando erro ou não
        loading.classList.add('hidden'); // Esconde "Buscando cotação..."
    }
});
