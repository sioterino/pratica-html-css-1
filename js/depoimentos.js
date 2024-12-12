const secao = document.createElement('section');
secao.classList.add('depoimentos')

const titulo = document.createElement('h2');
titulo.classList.add('depoimentos__titulo')

titulo.textContent = 'Depoimentos';

secao.append(titulo);

const conteudo = document.createElement('div');
conteudo.classList.add('depoimentos__conteudo')

secao.append(conteudo);

const depoimentos = [
    {
        'autor': 'Fulano',
        'texto': 'O lugar é muito bonito. Adorei a experiência.'
    },
    {
        'autor': 'Ciclano',
        'texto': 'Passar momentos junto à natureza é sempre revigorante.'
    },
    {
        'autor': 'Beltrano',
        'texto': 'Não vejo a hora de voltar. O local é incrível'
    },
]

// depoimentos.forEach(depoimento => {
//     const conteiner = document.createElement('div');
//     conteiner.classList.add('depoimentos__conteiner');

//     const texto = document.createElement('p');
//     texto.classList.add('depoimentos__texto')
//     texto.textContent = depoimento.texto

//     const autor = document.createElement('p');
//     autor.classList.add('depoimentos__autor')
//     autor.textContent = depoimento.autor

//     conteiner.append(texto);
//     conteiner.append(autor);

//     conteudo.append(conteiner);

// });

let slide = 0

const conteiner = document.createElement('div');
conteiner.classList.add('depoimentos__conteiner');

const texto = document.createElement('p');
texto.classList.add('depoimentos__texto')
texto.textContent = depoimentos[slide].texto

const autor = document.createElement('p');
autor.classList.add('depoimentos__autor')
autor.textContent = depoimentos[slide].autor

conteiner.append(texto);
conteiner.append(autor);

const setaDireita = document.createElement('img')
setaDireita.classList.add('depoimentos__seta');
setaDireita.src = 'img/icons/next-rigght.png'

const setaEsquerda = document.createElement('img')
setaEsquerda.classList.add('depoimentos__seta');
setaEsquerda.classList.add('sinistra');
setaEsquerda.src = 'img/icons/next-rigght.png'


conteudo.append(setaEsquerda);
conteudo.append(conteiner);
conteudo.append(setaDireita);




const main = document.querySelector('main');

main.lastElementChild.before(secao)


function slideNext(slide) {
    slide = (slide + 1) % depoimentos.length
}