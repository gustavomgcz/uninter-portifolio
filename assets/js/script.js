// Mostrar personagem tibia

// Criação de um objeto com o link das imagens
const gifsTibia = [
  "./assets/img/tibia/Assassin Male.gif",
  "./assets/img/tibia/Barbarian Male.gif",
  "./assets/img/tibia/Beggar Male.gif",
  "./assets/img/tibia/Brotherhood Female.gif",
  "./assets/img/tibia/Brotherhood Male.gif",
  "./assets/img/tibia/Citizen Male.gif",
  "./assets/img/tibia/Druid Male.gif",
  "./assets/img/tibia/Hunter Male.gif",
  "./assets/img/tibia/Jester Male.gif",
  "./assets/img/tibia/Knight Male.gif",
  "./assets/img/tibia/Oriental Male.gif",
  "./assets/img/tibia/Pirate Male.gif",
  "./assets/img/tibia/Shaman Male.gif",
  "./assets/img/tibia/Summoner Male.gif",
  "./assets/img/tibia/Warrior Male.gif",
  "./assets/img/tibia/Wizard Male.gif",
];

const cursorTibia = document.querySelectorAll(".tibia");                          // Armazenamento dos locais que possuem a classe 'tibia'
const imagemTibia = document.querySelector(".main-sobre__imagem--tibia");         // Armazenamento do local onde tem a classe 'main-sobre__imagem--tibia'

cursorTibia.forEach((elemento) => {                                   // Loop que percorre os elementos da constante 'cursorTibia'
  elemento.addEventListener("mouseover", function () {                // Função para 'ouvir' quando o mouse estiver sobre o elemento especifico de 'cursorTibia'
    const aleatorio = Math.floor(Math.random() * 15);                 // Salva um numero aleatório
    imagemTibia.src = gifsTibia[aleatorio];                           // Insere um link de imagem no elemento 'imagemTibia'
    imagemTibia.style.display = "inline";                             // Altera o css do elemento para display: inline; para que a imagem apareça 
  });

  elemento.addEventListener("mouseout", function () {                 // Função similar ao de cima, mas que a ação é fazer com que as imagens sumam após tirar o mouse do elemento
    imagemTibia.src = "";
    imagemTibia.style.display = "none";
  });
});

// Alterar para Light/Dark Mode

const temaAtual = localStorage.getItem("tema");       // Pega no local storage qual o 'tema' atual
if (temaAtual === "light") {                          // Condição para inserir uma classe caso o tema seja "light"
  document.body.classList.add("light-mode");
}

const btnMudarTema = document.getElementById("alterar-tema");     // Armazena o elemento do botão de mudar tema

// Abaixo são constantes para armazenar os SVGs utilizados na troca de icones durante a troca de tema
const svgMoon = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
    </svg>`;
const svgSun = `
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"></path>
    </svg>`;
    
// Abaixo são constantes para armazenar as imagens que serão alteradas com a troca de tema
const logoBentoQuirino = document.getElementById("logo-bento-quirino");
const imgBentoQuirinoClaro = "./assets/img/Logo-Bento-Quirino-Branco.png";
const imgBentoQuirinoEscuro = "./assets/img/Logo-Bento-Quirino-Azul.png";
const logoUninter = document.getElementById("logo-uninter");
const imgUninterClaro = "./assets/img/uninter-logo-1-branco.png";
const imgUninterEscuro = "./assets/img/uninter-logo-1.png";


// função para realizar a troca de temas
function aplicarTema() {
  if (document.body.classList.contains("light-mode")) {   // Se houver a classe 'light-mode' no body, altera o SVG
    btnMudarTema.innerHTML = svgMoon;
    if (logoUninter) {        // Se na página houver a constante 'logoUninter', realiza a troca de imagens
      logoBentoQuirino.src = imgBentoQuirinoEscuro;
      logoUninter.src = imgUninterEscuro;
    }
  } else {   // Se não houver a classe 'light-mode' no body, altera o SVG
    btnMudarTema.innerHTML = svgSun;
    if (logoUninter) {        // Se na página houver a constante 'logoUninter', realiza a troca de imagens
      logoBentoQuirino.src = imgBentoQuirinoClaro;
      logoUninter.src = imgUninterClaro;
    }
  }
}

btnMudarTema.addEventListener("click", () => {      // Função que checa se houve o click no botão
  document.body.classList.toggle("light-mode");     // altera a classe "light-mode"
  aplicarTema();                                    // chama a função que aplica o tema para realizar a troca
  if (document.body.classList.contains("light-mode")) {     // condiçaõ para setar o tema no local storage que será usado para que o tema fique salvo e não altere com a mudança de tela
    localStorage.setItem("tema", "light");
  } else {
    localStorage.setItem("tema", "dark");
  }
});

aplicarTema();

// Tratar dados do form

const formulario = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", (e) => {            // funçaõ para interromper o submit quando o botão for clicado, alertar o sucesso do envio do email, limpar os campos e atualizar a tela
  e.preventDefault();
  alert("E-mail enviado com sucesso!");
  nome.value = "";
  email.value = "";
  mensagem.value = "";
  location.reload();
  window.scrollTo(0, 0);
});
