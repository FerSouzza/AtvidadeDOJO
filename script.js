function calcular() {
    let n1 = Number(document.getElementById('n1').value) || 0;
    let n2 = Number(document.getElementById('n2').value) || 0;
    let n3 = Number(document.getElementById('n3').value) || 0;
    let n4 = Number(document.getElementById('n4').value) || 0;
    
    let media = (n1 + n2 + n3 + n4) / 4;
    document.getElementById('visorMedia').innerText = media;
}

function registrar(event) {
    event.preventDefault(); 

    let nomeSalvo = document.getElementById('nome').value;

    let notas = [
        Number(document.getElementById('n1').value),
        Number(document.getElementById('n2').value),
        Number(document.getElementById('n3').value),
        Number(document.getElementById('n4').value)
    ];

    let mediaFinal = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;
    let situacao = "";

    if (mediaFinal >= 6) {
        situacao = "APROVADO";
    } else if (mediaFinal >= 2 && mediaFinal < 6) {
        situacao = "EXAME";
    } else {
        situacao = "REPROVADO";
    }

    document.write("<h1>" + situacao + "</h1>");
}
