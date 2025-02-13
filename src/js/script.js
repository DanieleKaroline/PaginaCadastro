function limparFormulario() {
    document.getElementById("meuFormulario").reset();
}

const selectAno = document.getElementById("ano_entrada");
const anoAtual = new Date().getFullYear();

selectAno.innerHTML = '<option value="">Selecione...</option>';
for (let ano = anoAtual; ano >= 2022; ano--) {
    let option = document.createElement("option");
    option.value = ano;
    option.textContent = ano;
    selectAno.appendChild(option);
}

// Função de validação do formulário
function validarFormulario() {
    const selectAno = document.getElementById("ano_entrada");
    const selectSemestre = document.getElementById("semestre_entrada");
    const selectOcupacao = document.getElementById("ocupacao");

    if (selectAno.value === "" || selectSemestre.value === "" || selectOcupacao.value === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio do formulário
}

document.getElementById("ocupacao").addEventListener("change", function () {
    var ocupacao = this.value;
    var esportesSection = document.getElementById("esportes_section");

    if (ocupacao === "membro" || ocupacao === "") {
        esportesSection.style.display = "none";
    } else {
        esportesSection.style.display = "flex";
    }
});