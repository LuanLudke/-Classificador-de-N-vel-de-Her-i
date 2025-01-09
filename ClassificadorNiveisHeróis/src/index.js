// Solicita o nome do personagem
const personagem = prompt("Por favor, insira o nome de um personagem:");

// Verifica se o personagem foi escolhido
if (personagem) {
  console.log("O nome do personagem escolhido foi: " + personagem);
} else {
  console.log("Nenhum personagem foi escolhido");
}

// Define a experiência (XP) do personagem
let xp = 0;

// Define a experiência (XP) do personagem com base no nome
switch (personagem) {
  case "Ash":
    xp = 7500;
    break;
  case "Broky":
    xp = 4300;
    break;
  case "Misty":
    xp = 5100;
    break;
  case "Gary":
    xp = 9300;
    break;
  default:
    // Se o personagem não for encontrado, solicita a experiência (XP)
    xp = parseInt(prompt("Por favor, insira a experiência (XP) do personagem:"));
}

// Define o nível do personagem com base na experiência (XP)
let nivel = "";
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp >= 1000 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal";
} else if (xp >= 10001) {
  nivel = "Radiante";
}

// Exibe a mensagem final
console.log("O Herói de nome " + personagem + " está no nível de " + nivel);