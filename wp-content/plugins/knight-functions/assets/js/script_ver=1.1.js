var card;
function stripeTokenHandler(token) {
    var form = document.getElementById('register_form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    form.submit();
}
function calcAmount(chk){
    if (chk) {
        jQuery('input[name="amount"]').val(parseFloat(jQuery('input[name="org_amount"]').val())+parseFloat(jQuery('input[name="sub_amount"]').val()));
    }
    else{
        jQuery('input[name="amount"]').val(jQuery('input[name="org_amount"]').val());
    }
}
function loadSignupData(id){
    jQuery('.popup-trigger').trigger('click');
    jQuery('#popupcontentloader').html('Loading...');
    jQuery('#popupcontentloader').load(pejson.site_url+'/wp-admin/admin-ajax.php',{action:'load_loyalty_form',id:id},function(){
        (function($){
            // SquarePaymentFlow();
            if(card) card.destroy();
            var stripe = Stripe(pejson.pub_key);
            var elements = stripe.elements();
            var style = {
                base: {
                    color: '#32325d',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                        color: '#aab7c4'
                    }
                },
                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }
            };
            if (jQuery('#card-element').length>0) {
                card = elements.create('card', {hidePostalCode: true,style: style});
                card.mount('#card-element');
                card.addEventListener('change', function(event) {
                    var displayError = document.getElementById('card-errors');
                    if (event.error) {
                        displayError.textContent = event.error.message;
                    } else {
                        displayError.textContent = '';
                    }
                });
                var form = document.getElementById('register_form');
            }
            if ($('#register_form').length>0) {
                $('#register_form').validate({
                    rules:{
                        referral_code:{
                            remote:pejson.site_url+'/wp-admin/admin-ajax.php?action=check_referral_code',
                        },
                    },
                    messages:{
                        referral_code:{
                            remote:'Invalid coupon code',
                        }
                    },
                    ignore: [],
                    errorPlacement: function (error, element) {
                    var type = $(element).attr("type");
                    error.appendTo($(element).closest('.form-group'));
                },
                submitHandler: function(form){
                    $('button[name="btn_pay"]').prop('disabled',true);$('.loading_overlay').show();
                    stripe.createToken(card).then(function(result) {
                        if (result.error) {
                            var errorElement = document.getElementById('card-errors');
                            errorElement.textContent = result.error.message;
                            $('button[name="btn_pay"]').prop('disabled',false);$('.loading_overlay').hide();
                        } else {
                            stripeTokenHandler(result.token);
                        }
                    });
                }
                });
            }
        })(jQuery);
    });
}