const dataAtual = new Date();
let dataObjetivo = prompt("Data final Ano-Mes-Dia Ex: 2024-04-10");
dataObjetivo = new Date(dataObjetivo+"T23:59:59")
let diasQueFaltam = math.floor((dataObjetivo - dataAtual) / 864000000);
document.querySelector("#dias_restantes").textContent = diasQueFaltam;