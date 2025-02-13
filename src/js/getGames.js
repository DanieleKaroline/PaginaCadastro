document.addEventListener("DOMContentLoaded", async function () {
    function criarCheckbox(containerId, lista) {
        const container = document.getElementById(containerId);
        container.innerHTML = ""; // Limpa o container antes de adicionar novos elementos

        lista.forEach((game) => {
            const rotulo = game.slug.toLowerCase(); // Gera um ID único
            const checkbox = `
                <div class="form-check col-md-12">
                    <input class="form-check-input" type="checkbox" value="${rotulo}" id="${rotulo}">
                    <label class="form-check-label" for="${rotulo}">${game.titulo}</label>
                </div>
            `;
            container.innerHTML += checkbox;
        });
    }

    try {
        const response = await axios.get("http://localhost:3000/games");
        criarCheckbox("games-container", response.data);
    } catch (error) {
        console.error("Erro ao carregar esportes:", error);
    }
});
