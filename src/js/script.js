function limparFormulario() {
    document.getElementById("meuFormulario").reset()
}

function validarFormulario() {
    const selectOcupacao = document.getElementById("ocupacao")

    if (selectOcupacao.value === "") {
        alert("Por favor, preencha todos os campos obrigatórios.")
        return false
    }

    return true
}

document.getElementById("ocupacao").addEventListener("change", function () {
    var ocupacao = this.value
    var esportesSection = document.getElementById("esportes_section")

    if (ocupacao === "membro" || ocupacao === "") {
        esportesSection.style.display = "none"
    } else {
        esportesSection.style.display = "flex"
    }
})