document.addEventListener("DOMContentLoaded", function () {
    const telefoneInput = document.getElementById("telefone")
    const contatoInput = document.getElementById("telefone_emergencia")

    telefoneInput.addEventListener("input", function (event) {
        let telefone = event.target.value.replace(/\D/g, "")

        if (telefone.length > 11) {
            telefone = telefone.slice(0, 11)
        }

        let formatado = ""

        if (telefone.length > 0) {
            formatado = `(${telefone.slice(0, 2)}`
        }
        if (telefone.length >= 3) {
            formatado += `) `
        }
        if (telefone.length > 2 && telefone.length < 7) {
            formatado += telefone.slice(2)
        }
        if (telefone.length >= 7 && telefone.length <= 10) {
            formatado += `${telefone.slice(2, 6)}-${telefone.slice(6)}`
        }
        if (telefone.length === 11) {
            formatado += `${telefone.slice(2, 3)} ${telefone.slice(3, 7)}-${telefone.slice(7)}`
        }

        const posicaoCursor = formatado.length
        event.target.value = formatado

        setTimeout(() => {
            event.target.setSelectionRange(posicaoCursor, posicaoCursor)
        }, 0)
    })

    contatoInput.addEventListener("input", function (event) {
        let contato = event.target.value.replace(/\D/g, "")

        if (contato.length > 11) {
            contato = contato.slice(0, 11)
        }

        let formatado = ""

        if (contato.length > 0) {
            formatado = `(${contato.slice(0, 2)}`
        }
        if (contato.length >= 3) {
            formatado += `) `
        }
        if (contato.length > 2 && contato.length < 7) {
            formatado += contato.slice(2)
        }
        if (contato.length >= 7 && contato.length <= 10) {
            formatado += `${contato.slice(2, 6)}-${contato.slice(6)}`
        }
        if (contato.length === 11) {
            formatado += `${contato.slice(2, 3)} ${contato.slice(3, 7)}-${contato.slice(7)}`
        }

        const posicaoCursor = formatado.length
        event.target.value = formatado

        setTimeout(() => {
            event.target.setSelectionRange(posicaoCursor, posicaoCursor)
        }, 0)
    })
})
