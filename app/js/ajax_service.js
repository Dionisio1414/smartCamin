jQuery(document).ready(function ($) {
    $('#service_phone').mask('+38(000)000-00-00');
    $('#services').submit(function(e){
        e.preventDefault();
        var name = $('#service_name').val(),
            email = $('#service_email').val(),
            phone = $('#service_phone').val(),
            comment = $('#comment').val(),
            air = '',
            water = '',
            key = '',
            system = '',
            doors = '',
            flag = true;
            if ($('#air').is(":checked"))
                air = 'Монтаж воздушных каминов';
            if ($('#water').is(":checked"))
                water = 'Монтаж каминов с водяной рубашкой';
            if ($('#key').is(":checked"))
                key = 'Строительство саун под ключ';
            if ($('#system').is(":checked"))
                system = 'Монтаж дымоотводных систем';
            if ($('#doors').is(":checked"))
                doors = 'Производство и установка каминных дверок';

            if (name == ''){
                $('.invalid.service-name').show();
                $("#service_name").css({"margin": "0"});
                flag = false;}
            if (phone.length < 17){
                $('.invalid.service-phone').show();
                $("#service_phone").css({"margin": "0"});
                flag = false;}

            if(flag)
            $.ajax({ 
                type: "POST",
                url: '/php/service-mail.php',
                data: {
                    name: name,
                    email: email,
                    phone: phone,
                    comment: comment,
                    air: air,
                    water: water,
                    key: key,
                    system: system,
                    doors: doors,
                    success: function(){
                        $('.success-message.services').show();
                        $('#service').hide();
                        $('.modal-form.services .modal-top').hide();
                        }
                },
            });
    });
});
