const tabela = document.createElement('table')
tabela.classList.add('tabela')

const header = document.createElement('tr')
header.classList.add('tabela__header')

const nome = document.createElement('th')
const email = document.createElement('th')
const periodo = document.createElement('th')
const mensagem = document.createElement('th')
nome.classList.add('header__nome')
email.classList.add('header__email')
periodo.classList.add('header__periodo')
mensagem.classList.add('header__mensagem')

header.append(nome)
header.append(email)
header.append(periodo)
header.append(mensagem)

tabela.append(header)

// ------------------

const envios = document.createElement('tr')
envios.classList.add('tabela__envios')

tabela.append(envios)






const mainSection = document.querySelector("main");
mainSection.lastElementChild.after(tabela);