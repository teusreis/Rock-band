//Área abaixo é reservada para declarar as variáveis
var fomulario = document.getElementById('compra')
var btn = document.getElementById('finalizarCompra')
var set = document.getElementById('set')
var out = document.getElementById('out')
var nov = document.getElementById('nov')
// varíaveis da area de data dos shows que serão altaradas!.
var img = document.getElementById('imgCidade1')
var img2 = document.getElementById('imgCidade2')
var img3 = document.getElementById('imgCidade3')
var cidade = document.getElementById('cidade1')
var cidade2 = document.getElementById('cidade2')
var cidade3 = document.getElementById('cidade3')
var data1 = document.getElementById('data1')
var data2 = document.getElementById('data2')
var data3 = document.getElementById('data3')
var endereco1 = document.getElementById('endereco1')
var endereco2 = document.getElementById('endereco2')
var endereco3 = document.getElementById('endereco3')
var bt = document.getElementById('btCompra')
// Váriaveis do menu
const menuBt = document.querySelector('#ckeck')
const item = document.querySelectorAll('.links')
const menu = document.getElementsByTagName('ul')[0]

menuBt.addEventListener('click', abrirMenu)
set.addEventListener('click', agendaSetembro)
out.addEventListener('click', agendaOutubro)
nov.addEventListener('click', agendaNovembro)

fomulario.addEventListener('input', preco) // calculo da compra dos ingressos
btn.addEventListener('click', confirmarCompra) //confirmar compra


// A área abaixo é reservada para crias as funções que serão chamadas pela área acima


// Função para ativar/desativar o menu mobile
function abrirMenu() {
    menu.classList.toggle('nav-linksAberto')
}


//Função para checar a agenda de show do mês de setembro
function agendaSetembro() {
    img.src = "imagens/cidadeshow/show-saopaulo.jpg"
    img2.src = "imagens/cidadeshow/show-riodejaneiro.jpg"
    img3.src = "imagens/cidadeshow/show-belohorizonte.jpg"

    bt.style.backgroundColor = 'black'
    bt.innerHTML = 'Buy Ticket'

    cidade.innerHTML = "São Paulo"
    cidade2.innerHTML = "Rio de Janeiro"
    cidade3.innerHTML = "Belo Horizonte"

    data1.innerHTML = "Sexta, 13 Set 2019"
    data2.innerHTML = "Sexta, 20 Set 2019"
    data3.innerHTML = "Sexta, 27 Set 2019"

    endereco1.innerHTML = "Praça Ramos De Azevedo República, São Paulo - SP."
    endereco2.innerHTML = "R. Alcindo Guanabara, Centro, Rio de Janeiro - RJ."
    endereco3.innerHTML = "Av. Afonso Pena, 1537 - Centro, Belo Horizonte - MG."
}

//Função para checar a agenda de show do mês de outubro
function agendaOutubro() {
    img.src = "imagens/cidadeshow/show-argentina.jpg"
    img2.src = "imagens/cidadeshow/show-chile.jpg"
    img3.src = "imagens/cidadeshow/show-cuba.jpg"

    bt.style.backgroundColor = 'red'
    bt.innerHTML = 'Esgotado'


    cidade.innerHTML = "Buenos Aires"
    cidade2.innerHTML = "Chile"
    cidade3.innerHTML = "Cuba"

    data1.innerHTML = "Sexta, 11 Out 2019"
    data2.innerHTML = "Sexta, 18 Out 2019"
    data3.innerHTML = "Sexta, 25 Out 2019"

    endereco1.innerHTML = "Cerrito 628, C1010 CABA, Argentina."
    endereco2.innerHTML = "Agustinas 794, Santiago, Región Metropolitana, Chile."
    endereco3.innerHTML = "Santiago de Cuba, centre norte, Cuba."
}

//Função para checar a agenda de show do mês de novembro
function agendaNovembro() {
    img.src = "imagens/cidadeshow/show-newyork.jpg"
    img2.src = "imagens/cidadeshow/show-paris.jpg"
    img3.src = "imagens/cidadeshow/show-sanfran.jpg"

    bt.style.backgroundColor = 'black'
    bt.innerHTML = 'Buy Ticket'

    cidade.innerHTML = "Nova York"
    cidade2.innerHTML = "Paris"
    cidade3.innerHTML = "São Francisco"

    data1.innerHTML = "Sexta, 15 Nov 2019"
    data2.innerHTML = "Sexta, 22 Nov 2019"
    data3.innerHTML = "Sexta, 22 Nov 2019"

    endereco1.innerHTML = "Apollo Theater, 253 W 125th St, New York, NY, USA."
    endereco2.innerHTML = "1 Place Colette, 75001 Paris, France."
    endereco3.innerHTML = "1192 Market St, San Francisco, CA 94102, USA."

}


// Função para "validar" o E-mail
function confirmarCompra() {
    let em = document.getElementById('email').value
    if (!em.checkValidity()) { }
}

// função para calcular o presso total dos ingressos!
function preco() {
    let qtd = document.getElementById('numIngresso').value
    let valor = document.getElementById('valor')
    let totalCompra = qtd * 30
    valor.value = totalCompra.toFixed(2)
}
