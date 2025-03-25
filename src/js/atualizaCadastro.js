async function buscarCadastro() {
    const searchQuery = document.getElementById("search").value

    if (searchQuery.length >= 3) {
        try {
            const response = await axios.get(`https://servidorcadastro.onrender.com/membros/documento?matricula=${searchQuery}`)

        
            if (response.data) {
                preencherFormulario(response.data)
                document.getElementById("formulario-container").style.display = "block"
            } else {
                alert('Cadastro não encontrado.')
                document.getElementById("formulario-container").style.display = "none"
            }
        } catch (error) {
            document.getElementById("formulario-container").style.display = "none"
        }
    } else {
        document.getElementById("formulario-container").style.display = "none"
    }
}

function preencherFormulario(data) {
    document.getElementById("id").value = data._id || ''
    document.getElementById("inscricao").value = data.inscricao || ''
    document.getElementById("nome").value = data.nome || ''
    document.getElementById("cpf").value = data.cpf || ''
    document.getElementById("matricula").value = data.matricula || ''
    document.getElementById("email").value = data.email || ''
    document.getElementById("cep").value = data.endereco?.cep || ''
    document.getElementById("rua").value = data.endereco?.rua || ''
    document.getElementById("numero").value = data.endereco?.numero || ''
    document.getElementById("complemento").value = data.endereco?.complemento || ''
    document.getElementById("bairro").value = data.endereco?.bairro || ''
    document.getElementById("cidade").value = data.endereco?.cidade || ''
    document.getElementById("telefone").value = data.telefone || ''
    document.getElementById("telefone_emergencia").value = data.telefone_emergencia || ''
    document.getElementById("condicao").value = data.condicao || ''
}

async function atualizaMembro(event) {
    event.preventDefault()

    const idMembro = document.getElementById("id").value

    const inscricao = document.getElementById("inscricao").value
    const cep = document.getElementById("cep").value
    const telefone_emergencia = document.getElementById("telefone_emergencia").value
    const complemento = document.getElementById("complemento").value
    const condicao = document.getElementById("condicao").value
    
    const dados = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        matricula: document.getElementById("matricula").value,
        email: document.getElementById("email").value,
        endereco: {
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            bairro: document.getElementById("bairro").value,
            cidade: document.getElementById("cidade").value,
        },
        telefone: document.getElementById("telefone").value
    }

    inscricao.length > 0 && (dados.inscricao = inscricao)
    cep.length > 0 && (dados.endereco.cep = cep)
    complemento.length > 0 && (dados.endereco.complemento = complemento)
    telefone_emergencia.length > 0 && (dados.telefone_emergencia = telefone_emergencia)
    condicao.length > 0 && (dados.condicao = condicao)

    try {
        const response = await axios.put(`https://servidorcadastro.onrender.com/membros/${idMembro}`, dados)

        localStorage.setItem('dadosUsuario', JSON.stringify(response.data))

        window.location.href = "/cartao"
    } catch (error) {
        console.error("Erro ao atualizar cadastro:", error)
        alert("Erro ao atualizar cadastro. Tente novamente.")
    }
}

function limparFormulario() {
    document.getElementById("search").value = ''
    document.getElementById("formulario-container").style.display = "none"
}

