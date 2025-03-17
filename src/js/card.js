document.addEventListener('DOMContentLoaded', () => {
    const dados = JSON.parse(localStorage.getItem('dadosUsuario'))

    console.log(dados)

    if (!dados || !dados.nome || !dados.categoria || !dados.ocupacao) {
        window.location.href = "/"  // Ajuste o caminho conforme necessário
        localStorage.removeItem('dadosUsuario');
        return
    }


    document.getElementById('nome').innerText = dados.nome.toUpperCase()
    document.getElementById('inscricao').innerText = dados.inscricao
    document.getElementById('categoria').innerText = dados.categoria.toUpperCase()
    document.getElementById('ocupacao').innerText = dados.ocupacao.toUpperCase()

    document.getElementById('baixar-cartao').addEventListener('click', () => {
        const cartao = document.getElementById('cartao')

        html2canvas(cartao, {
            useCORS: true,
            scale: 4,
            backgroundColor: null,
        }).then((canvas) => {
            const link = document.createElement('a')
            link.download = 'cartao_inscricao.png'
            link.href = canvas.toDataURL('image/png')
            link.target = '_blank'
            link.click()

            localStorage.removeItem('dadosUsuario');
        })
    })

    localStorage.removeItem('dadosUsuario');

})
