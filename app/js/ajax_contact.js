jQuery(document).ready(function ($) {
        $('#contact_phone').mask('+38(000)000-00-00');
        $('#contact').submit(function(e){
            e.preventDefault();
            var name = $('#contact_name').val(),
                phone = $('#contact_phone').val();
                flag = true;
                if (name == ''){
                    $('.invalid.contact-name').show();
                    $("#contact_name").css({"margin": "0"});
                    flag = false;}
                if (phone.length < 17){
                    $('.invalid.contact-phone').show();
                    $("#contact_phone").css({"margin": "0"});
                    flag = false;}
                if(flag)
                $.ajax({ 
                    type: "POST",
                    url: '/php/contact-mail.php',
                    data: {
                        name: name,
                        phone: phone,
                    success: function(){
                        $('.success-message.contact').show();
                        $('#contact').hide();
                        $('.modal-form.contacts .modal-top').hide();
                        }
                    },
                });
        });
});
