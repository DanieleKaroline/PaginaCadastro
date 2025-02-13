document.addEventListener("DOMContentLoaded", function () {
    const matriculaInput = document.getElementById("matricula")

    matriculaInput.addEventListener("input", function (event) {
        let matricula = event.target.value.replace(/[^0-9]/g, "")

        event.target.value = matricula
    })
})
