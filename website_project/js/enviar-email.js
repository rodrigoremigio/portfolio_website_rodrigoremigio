async function enviarEmail() {
    const nome = $('#name').val();
    const email = $('#email').val();
    const telefone = $('#phone').val();
    const mensagem = $('#message').val();

    /* Valida se todos os campos obrigatórios estão preenchidos */
    if (!isCamposValidos(nome, email, telefone, mensagem)) {
        return;
    }

    /* Desabilita o botão */
    $('#enviar').attr('disabled', 'true');

    /* Mostra o loading */
    $('#loading-spinner').removeAttr('hidden');

    Email.send({
        /*SecureToken : "ebab4c50-ed1d-4d4d-920c-583ebc020dee",*/
        Host: 'smtp.elasticemail.com',
        Username: 'rodrigoptfb@gmail.com',
        Password: 'EA46A3AADC4721156163A2C8C50732822FC0',
        To : 'rodrigo.brq@gmail.com',
        From : 'rodrigoptfb@gmail.com',
        Subject : `Mensagem de contato - ${email}`, /* Assunto */
        Body : montarMensagem(nome, email, telefone, mensagem) /* Corpo do email */
    }).then(() => { /* Após o envio do email */
        /* Mostra o modal */
        $('#messageSent').modal('toggle');

        /* Oculta o loading */
        $('#loading-spinner').attr('hidden', 'true');

        /* Habilita o botão */
        $('#enviar').removeAttr('disabled');

        limparFormulario();
    });
}

/**
 * HTML que será renderizado no corpo do email.
 * */
function montarMensagem(nome, email, telefone, detalhes) {
    return `<div>
                <p><strong>Nova mensagem:</strong></p>
                <p>Nome: ${nome}</p>
                <p>Email: ${email}</p>
                <p>Telefone: ${telefone}</p>
                <p>Detalhes: ${detalhes}</p>
            </div>`;
}

function limparFormulario() {
    $('#name').val("")
    $('#email').val("");
    $('#phone').val("");
    $('#message').val("");
}

function isCamposValidos(nome, email, telefone, mensagem) {
    
    if (!nome.trim() || !email.trim() || !telefone.trim() || !mensagem.trim()) {
        $('#camposObrigatoriosNaoPreenchidos').modal('toggle');
        return false;
    }

    return true;
}