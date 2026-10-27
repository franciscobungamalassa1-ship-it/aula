

    function media() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

  return (nota1 + nota2 + nota3) / 3;


    if (media >= 10 && media <= 20) {
        estas = "Aprovado!";
    } 
    else if (media >= 7 && media <= 9) {
        estas = "No recurso!";
    }
     else if (media >= 0 && media < 7) {
        estas= "Reprovado!";
    } 
    else if(media >20 )    { 
        estas = "Notas é inválidas!";
    }

    document.getElementById("resultado").innerText ="A tua média é: " + media +"\nEstás: " + estas;
    
}
document.write(media())