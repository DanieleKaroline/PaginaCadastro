async function validarFormulario(event) {
    event.preventDefault()
    
    const nome = document.getElementById('nome').value.split(" ")
        .map(palavra => palavra.length > 3 ? palavra.charAt(0).toUpperCase() + palavra.slice(1) : palavra).join(" ")
    const cpf = document.getElementById('cpf').value
    const matricula = document.getElementById('matricula').value
    const email = document.getElementById('email').value
    const cep = document.getElementById('cep').value
    const rua = document.getElementById('rua').value
    const numero = document.getElementById('numero').value
    const complemento = document.getElementById('complemento').value
    const bairro = document.getElementById('bairro').value
    const cidade = document.getElementById('cidade').value
    const telefone = document.getElementById('telefone').value
    const telefone_emergencia = document.getElementById('telefone_emergencia').value
    const categoria = document.querySelector('input[name="categoria"]:checked')?.value
    const ocupacao = document.getElementById('ocupacao').value
    const condicao = document.getElementById('condicao').value

    
    const esportesSelecionados = Array.from(document.querySelectorAll('#esportes-container input[type="checkbox"]:checked')).map(checkbox => checkbox.value)

    
    const gamesSelecionados = Array.from(document.querySelectorAll('#games-container input[type="checkbox"]:checked')).map(checkbox => checkbox.value)

    const endereco = {
        rua,
        numero: numero.toString(),
        bairro,
        cidade
    }

    cep.length > 0 && (endereco.cep = cep)
    complemento.length > 0 && (endereco.complemento = complemento)

    
    const formData = {
        nome,
        cpf,
        matricula,
        email,
        endereco,
        telefone,
        categoria,
        ocupacao
    }

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

        const response = await axios.post('https://servidorcadastro.onrender.com/membros', formData)
        
        localStorage.setItem('dadosUsuario', JSON.stringify(response.data));

        window.location.href = "/cartao"
    } catch (error) {
        console.error('Erro ao enviar dados:', error)
        alert('Ocorreu um erro. Tente novamente.')
    }

    
    return false
}

function limparFormulario() {
    document.getElementById('formulario').reset()  
}
