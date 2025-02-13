// script.js

async function validarFormulario() {
    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const matricula = document.getElementById('matricula').value;
    const email = document.getElementById('email').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const telefone = document.getElementById('telefone').value;
    const telefone_emergencia = document.getElementById('telefone_emergência').value;
    const ano_entrada = document.getElementById('ano_entrada').value;
    const semestre_entrada = document.getElementById('semestre_entrada').value;
    const categoria = document.querySelector('input[name="categoria"]:checked')?.value;
    const ocupacao = document.getElementById('ocupacao').value;
    const condicao = document.getElementById('condicao').value;

    // Coletar esportes selecionados
    const esportesSelecionados = Array.from(document.querySelectorAll('#esportes-container input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    // Coletar e-sports selecionados
    const gamesSelecionados = Array.from(document.querySelectorAll('#games-container input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    console.log(esportesSelecionados)

    const endereco = {
        rua,
        numero: numero.toString(),
        bairro,
        cidade
    }

    cep.length > 0 && (endereco.cep = cep);
    complemento.length > 0 && (endereco.complemento = complemento);

    // Cria um objeto com os dados do formulário
    const formData = {
        nome,
        cpf,
        matricula,
        email,
        endereco,
        telefone,
        ano_entrada,
        semestre_entrada,
        categoria,
        ocupacao
    };

    if (telefone_emergencia.length > 0) {
        formData.telefone_emergencia = telefone_emergencia
    }
    if (condicao.length > 0) {
        formData.condicao = condicao
    }
    if (esportesSelecionados.length > 0) {
        formData.esportes = esportesSelecionados
    }
    if (gamesSelecionados.length > 0) {
        formData.games = gamesSelecionados
    }

    try {

        const response = await axios.post('http://localhost:3000/membros', formData);
        
        alert("acho q deu");  // Exibe a resposta do servidor
        document.getElementById('meuFormulario').reset();  // Limpa o formulário
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Ocorreu um erro. Tente novamente.');
    }

    // Impede o envio padrão do formulário
    return false;
}

function limparFormulario() {
    document.getElementById('meuFormulario').reset();  // Limpa todos os campos
}
