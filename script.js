function enviarPedido() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var tipoPlaca = document.getElementById('tipo_placa').value;

    // Formatar a mensagem para o WhatsApp
    var mensagem = "Olá, gostaria de encomendar uma placa personalizada com os seguintes detalhes:\n\n";
    mensagem += " Nome: " + nome + "\n";
    mensagem += " E-mail: " + email + "\n";
    mensagem += " Tipo de placa desejada: " + tipoPlaca;

    // Substituir espaços por %20 para a URL
    mensagem = mensagem.replace(/ /g, "%20");

    // Abrir o link do WhatsApp com a mensagem predefinida
    window.open("https://wa.me/92993706807?text=" + mensagem, "_blank");
}
