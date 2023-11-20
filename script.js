const contentFiller = document.getElementById("content");
document.getElementById("currentYear").innerHTML = new Date().getFullYear();


for (i = 0; i <= 60; i += 1) {
    contentFiller.appendChild(document.createElement("p"));
    contentFiller.lastChild.innerHTML = 'Linha :' +i;
}