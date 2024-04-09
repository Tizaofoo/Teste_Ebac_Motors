(document).ready(function() {
    $(`#carousel-imagens`).slick({
        autoplay: true,
    });

    $(`.menu-hamburger`).click(function() {
        $('nav').slideToggle();
    })

    $(`#telefone`).mask(`(ddd) 00000-0000`)

    $(`form`).validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages:{
            nome: `Por favor, insira seu nome`
        },
        submiHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let composIncorretos = validador. numberofInvalids();
            if (composIncorretos) {
                alert(`Existem ${composIncorretos} campos incorretos`)
            }
        }
    })

    $(`.lista_veiculos button`).click(function() {
        const destino = $(`#contato`);
        const nomeVeiculo = $(this).parent().find(`h3`).text();

        $(`#veiculo-interesse`).val(nomeVeiculo);

        $(`html`).animate({
            scroliTop: destino.offset().top
        }, 1000)
    })
})