function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var data = document.getElementById("data").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/11967029118?text=" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Sobrenome*: " + sobrenome + "%0a"
      + "*Data*: " + data + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }