const botao = document.getElementById("btn-calcular");

for (let i = 1; i <= 3; i++) {
    const campo = document.getElementById(`nota${i}`);
    campo.addEventListener("input", function () {
        if (campo.value !== "" && Number(campo.value) > 10) {
            campo.value = 10;
        } else if (campo.value !== "" && Number(campo.value) < 0) {
            campo.value = 0;
        }
    });
}

botao.addEventListener("click", function () {
    let nome = document.getElementById("nome").value.trim();
    let campo1 = document.getElementById("nota1").value;
    let campo2 = document.getElementById("nota2").value;
    let campo3 = document.getElementById("nota3").value;

    if (!nome || campo1 === "" || campo2 === "" || campo3 === "") {
        alert("Preencha todos os campos!");
        return;
    }

    if (/\d/.test(nome)) {
        alert("O nome não pode conter números!");
        return;
    }

    let nota1 = Number(campo1);
    let nota2 = Number(campo2);
    let nota3 = Number(campo3);

    if ([nota1, nota2, nota3].some(nota => !Number.isFinite(nota) || nota < 0 || nota > 10)) {
        alert("As notas devem estar entre 0 e 10!");
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;
    let situacao;

   
    if (media >= 7) {
        situacao = "Aprovado";
        document.getElementById("resultado").className = "aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
        document.getElementById("resultado").className = "recuperacao";
    } else {
        situacao = "Reprovado";
        document.getElementById("resultado").className = "reprovado";
}


    let mediaArredondada = media.toFixed(1);
    let texto = nome + " - Média: " + mediaArredondada + " - " + situacao;
    document.getElementById("resultado").innerHTML = texto;
});
