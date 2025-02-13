document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep")
    const ruaInput = document.getElementById("rua")
    const bairroInput = document.getElementById("bairro")
    const cidadeInput = document.getElementById("cidade")

    let mensagemErro = document.createElement("small")
    mensagemErro.style.color = "red"
    mensagemErro.style.display = "none"
    cepInput.parentNode.appendChild(mensagemErro)

    cepInput.addEventListener("input", function (event) {
        let cep = event.target.value.replace(/\D/g, "")

        if (cep.length > 8) {
            cep = cep.slice(0, 8)
        }

        let formatado = cep.length > 5 ? `${cep.slice(0, 5)}-${cep.slice(5)}` : cep
        event.target.value = formatado

        mensagemErro.style.display = "none"

        if (cep.length === 8) {
            buscarCEP(cep)
        }
    })

    async function buscarCEP(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json/`

        try {
            const response = await axios.get(url)

            if (response.data.erro) {
                exibirErro("Não encontrado.")
                return
            }

            ruaInput.value = response.data.logradouro || ""
            bairroInput.value = response.data.bairro || ""
            cidadeInput.value = response.data.localidade || ""
            mensagemErro.style.display = "none"

        } catch (error) {
            exibirErro("Erro ao buscar CEP.")
        }
    }

    function exibirErro(mensagem) {
        mensagemErro.textContent = mensagem
        mensagemErro.style.display = "block"
        ruaInput.value = ""
        bairroInput.value = ""
        cidadeInput.value = ""
    }
})
