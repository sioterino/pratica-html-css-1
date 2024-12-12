const form = document.querySelector('.contato__formulario')
const aviso = document.querySelector('.contato__texto');

const contatos = []

form.addEventListener('submit', evento => {
    evento.preventDefault()
    // console.log(evento.type, evento.target, evento.currentTarget, evento.timeStamp, evento.isTrusted)

    let nome = document.querySelector('#input-nome').value
    let email = document.querySelector('#input-email').value
    let periodo = document.querySelector('#input-periodo').value
    let mensagem = document.querySelector('#input-mensagem').value

    if (!nome || !email || !periodo || !mensagem) {
        aviso.textContent = 'Preencha todos os campos.'
        aviso.classList.add('cuidado')
        return
    }
    
    
    const contato = { nome, email, periodo, mensagem }
    contatos.push(contato)
    
    console.log(contatos)
    
    // form.reset()
    evento.target.reset()
    
    aviso.textContent = 'Responderemos depois da pescaria.'
    aviso.classList.remove('cuidado')

})