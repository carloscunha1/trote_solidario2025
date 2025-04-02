function calcular() {
  let soma = 0;
  let acaoSocial = Number(document.getElementById("acaoSocial").value) || 0;
  soma = soma + Number(acaoSocial);
  let homenagem = Number(document.getElementById("homenagem").value) || 0;
  soma = soma + Number(homenagem);
  let leite = Number(document.getElementById("leite").value) || 0;
  soma = soma + 2 * Number(leite);
  let kit = Number(document.getElementById("kit").value) || 0;
  let equipe = document.getElementById("equipe").value;
  let suplemento = Number(document.getElementById("suplemento").value) || 0;
  let pontosKitSupl = 0;

  if (equipe == "Laranja") {
    if (kit >= 97 && suplemento >= 49) {
      pontosKitSupl = 5000 + (kit - 97) * 30 + (suplemento - 49) * 15;
    } else if (kit >= 78) {
      pontosKitSupl = 4000 + (kit - 78) * 30;
    } else if (kit >= 49) {
      pontosKitSupl = 2500 + (kit - 49) * 30;
    } else if (kit >= 19) {
      pontosKitSupl = 1000 + (kit - 19) * 30;
    } else {
      pontosKitSupl = 0; // Abaixo de 20% = 0 pontos
    }
  } else if (equipe == "Preta") {
    if (kit >= 103 && suplemento >= 52) {
      pontosKitSupl = 5000 + (kit - 103) * 30 + (suplemento - 52) * 15;
    } else if (kit >= 82) {
      pontosKitSupl = 4000 + (kit - 82) * 30;
    } else if (kit >= 52) {
      pontosKitSupl = 2500 + (kit - 52) * 30;
    } else if (kit >= 21) {
      pontosKitSupl = 1000 + (kit - 21) * 30;
    } else {
      pontosKitSupl = 0; // Abaixo de 20% = 0 pontos
    }
  } else if (equipe == "Roxa") {
    if (kit >= 102 && suplemento >= 51) {
      pontosKitSupl = 5000 + (kit - 102) * 30 + (suplemento - 51) * 15;
    } else if (kit >= 82) {
      pontosKitSupl = 4000 + (kit - 82) * 30;
    } else if (kit >= 51) {
      pontosKitSupl = 2500 + (kit - 51) * 30;
    } else if (kit >= 20) {
      pontosKitSupl = 1000 + (kit - 20) * 30;
    } else {
      pontosKitSupl = 0; // Abaixo de 20% = 0 pontos
    }
  } else if (equipe == "Verde") {
    if (kit >= 88 && suplemento >= 44) {
      pontosKitSupl = 5000 + (kit - 88) * 30 + (suplemento - 44) * 15;
    } else if (kit >= 70) {
      pontosKitSupl = 4000 + (kit - 70) * 30;
    } else if (kit >= 44) {
      pontosKitSupl = 2500 + (kit - 44) * 30;
    } else if (kit >= 18) {
      pontosKitSupl = 1000 + (kit - 18) * 30;
    } else {
      pontosKitSupl = 0; // Abaixo de 20% = 0 pontos
    }
  } else if (equipe == "Vermelha") {
    if (kit >= 93 && suplemento >= 47) {
      pontosKitSupl = 5000 + (kit - 93) * 30 + (suplemento - 47) * 15;
    } else if (kit >= 74) {
      pontosKitSupl = 4000 + (kit - 74) * 30;
    } else if (kit >= 47) {
      pontosKitSupl = 2500 + (kit - 47) * 30;
    } else if (kit >= 19) {
      pontosKitSupl = 1000 + (kit - 19) * 30;
    } else {
      pontosKitSupl = 0; // Abaixo de 20% = 0 pontos
    }
  }

  soma = soma + pontosKitSupl;

  document.getElementById("soma").innerHTML = soma.toFixed(2);
  alert("Pontos Totais: " + soma.toFixed(2));
}
