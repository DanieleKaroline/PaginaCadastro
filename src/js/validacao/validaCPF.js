document.addEventListener("DOMContentLoaded", function () {
    const cpfInput = document.getElementById("cpf")
    const formGroup = cpfInput.closest('.mb-3')

    cpfInput.addEventListener("input", function (event) {
        let cpf = event.target.value.replace(/[^0-9.-]/g, "")

        if (cpf.length > 14) {
            cpf = cpf.slice(0, 14)
        }

        event.target.value = cpf
        cpfValido(cpf)
    })

    function cpfValido(cpf) {
        cpf = cpf.replace(/[^\d]/g, '')

       
        const existingError = formGroup.querySelector('small')
        if (existingError) {
            formGroup.removeChild(existingError)
        }

       
        if (cpf.length > 11) {
            exibirErro("CPF inválido!")
            return false
        }

       
        if (cpf.length !== 11) {
            return
        }

       
        if (/^(.)\1{10}$/.test(cpf)) {
            exibirErro("CPF inválido!")
            return false
        }

       
        let sum = 0
        let rest

       
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i)
        }

        rest = (sum * 10) % 11
        if (rest === 10 || rest === 11) rest = 0
        if (rest !== parseInt(cpf.charAt(9))) {
            exibirErro("CPF inválido!")
            return false
        }

       
        sum = 0
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf.charAt(i)) * (11 - i)
        }

        rest = (sum * 10) % 11
        if (rest === 10 || rest === 11) rest = 0
        if (rest !== parseInt(cpf.charAt(10))) {
            exibirErro("CPF inválido!")
            return false
        }

        return true
    }

    function exibirErro(mensagem) {
        const errorMessage = document.createElement("small")
        errorMessage.classList.add("text-danger")
        errorMessage.textContent = mensagem

       
        cpfInput.parentNode.appendChild(errorMessage)
    }
})
