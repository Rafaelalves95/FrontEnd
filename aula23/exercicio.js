function mudaTexto() {
    let valorDigitado = document.getElementById("hello").value;
    document.getElementById("mensagem").innerHTML = valorDigitado;
    if (valorDigitado === ""){
        return alert("Inisira uma mensagem");
    }
  }

document.getElementById("botao").addEventListener("click", mudaTexto);
