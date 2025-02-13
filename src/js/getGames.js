document.addEventListener("DOMContentLoaded", async function () {
    function criarCheckbox(containerId, lista) {
        const container = document.getElementById(containerId)
        container.innerHTML = ""

        lista.forEach((game) => {
            const rotulo = game.slug.toLowerCase()
            const checkbox = `
                <div class="form-check col-md-12">
                    <input class="form-check-input" type="checkbox" value="${rotulo}" id="${rotulo}">
                    <label class="form-check-label" for="${rotulo}">${game.titulo}</label>
                </div>
            `
            container.innerHTML += checkbox
        })
    }

    try {
        const response = await axios.get("https://servidorcadastro.onrender.com/games")
        criarCheckbox("games-container", response.data)
    } catch (error) {
        console.error("Erro ao carregar esportes:", error)
    }
})
