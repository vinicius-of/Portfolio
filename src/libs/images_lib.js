//Placeholder
//import ph512 from "../imgs/placeholder-512x512.png"

//Technologies Component
import reactIcon from '../imgs/React.js_logo-512.png'
import nodeJsIcon from '../imgs/nodejs-512.png'
import bsIcon from '../imgs/bootstrap_icon-512.png'
import sassIcon from '../imgs/sass-256x256.png'

// Used by TechnUI
export function getListTech(){
    const list = [
        {
            icon: reactIcon,
            name: "ReactJS",
            link: "https://pt-br.reactjs.org",
            description: "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.",
            image: ""
        },
        {
            icon: nodeJsIcon,
            name: "NodeJS",
            link: "https://nodejs.org/en/",
            description: "Node.js é um interpretador, com código aberto, de código JavaScript de modo assíncrono e orientado a eventos, focado em migrar a programação do Javascript do lado do cliente para os servidores, criando assim aplicações de alta escalabilidade, capazes de manipular milhares de conexões/requisições simultâneas em tempo real, numa única máquina física.",
            image: ""
        },
        {
            icon: bsIcon,
            name: "Bootstrap",
            link: "https://getbootstrap.com",
            description: "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.",
            image: ""
        },
        {
            icon: sassIcon,
            name: "SASS",
            link: "https://sass-lang.com",
            description: "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.",
            image: ""
        }
    ]
    
    list.forEach((tech) => {
        tech.id = list.indexOf(tech)
    })

    return list
}