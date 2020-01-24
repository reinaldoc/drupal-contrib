
function validaConsulta(){

    if (document.querySelector("#iNrProcessoUnica").value=="") {
        alert("Informe o número do processo.");
        document.querySelector("#iNrProcessoUnica").focus();
        return false;
    }

    if (document.querySelector("#iNrProcessoAnoUnica").value=="") {
        alert("Informe o ano do processo.");
        document.querySelector("#iNrProcessoAnoUnica").focus();
        return false;
    }

    if (document.querySelector("#iNrProcessoVaraUnica").value=="") {
        alert("Informe o código da Vara.");
        document.querySelector("#iNrProcessoVaraUnica").focus();
        return false;
    }

    // document.querySelector("#consulta_processo").submit();

    return validaNumeroProcesso();
}

function validaNumeroProcesso() {

    var numProcesso = document.querySelector("#iNrProcessoUnica").value;
    var numDigito = document.querySelector("#iNrDigitoUnica").value;
    var numAno = document.querySelector("#iNrProcessoAnoUnica").value;
    var numJustica = document.querySelector("#iNrJusticaUnica").value;
    var numRegiao = document.querySelector("#iNrRegiaoUnica").value;
    var numVara = document.querySelector("#iNrProcessoVaraUnica").value;

    var resultado;

    resultado = numProcesso % 97;

    resultado = resultado + pad(numAno, 4);
    resultado = resultado + pad(numJustica, 1);
    resultado = resultado + pad(numRegiao, 2);

    resultado = resultado % 97;

    resultado = resultado + pad(numVara, 4);
    resultado = resultado + '00';

    resultado = resultado % 97;

    resultado = 98 - resultado;

    if (numDigito == resultado) {
       return true;
    }
    
    alert('O número do processo não está no formato NNNNNNN-DD.AAAA.J.TR.OOOO.\n\nCaso necessário, utilize zeros a esquerda no primeiro campo, antes de colar.')
    return false;
}


function limparCampos(){
    
    document.querySelector("#iNrProcessoUnica").value = "";
    document.querySelector("#iNrDigitoUnica").value = "";
    document.querySelector("#iNrProcessoAnoUnica").value = "";
    document.querySelector("#iNrJusticaUnica").value = "5";
    document.querySelector("#iNrRegiaoUnica").value = "08";
    document.querySelector("#iNrProcessoVaraUnica").value = "";
    document.querySelector("#iNrProcessoUnica").focus();

}

function toggleContrast(){
    $('*:not(img)').toggleClass('accessibility-contrast');
}

//Função p Aumentar/ Diminuir fonte
function fonte(e){
    var elemento = $(" p, h1,  h2,  h3,  h4,  h5,  h6,  div,  a,  span");
    var fonte = elemento.css('font-size');
    if ((e == 'a')&&(parseInt(fonte) < 18)) {
	elemento.css("fontSize", parseInt(fonte) + 2);
    }else if((e == 'd')&&(parseInt(fonte) > 10)){
	elemento.css("fontSize", parseInt(fonte) - 2);
    } 
}

/* Traducao */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: "pt",
        autoDisplay: true,
        includedLanguages: "pt,es,en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },"google_translate_element");
    
    document.body.style.top = "0px";
}

function ChangeLang(f) {
    var e, d = "";
    if (document.createEvent) {
        var g = document.createEvent("HTMLEvents");
        g.initEvent("click", true, true)
    }
    if (f == "pt") {
        d = jQuery(".goog-te-banner-frame:eq(0)").contents().find("button[id*='restore']")
    } else {
        switch (f) {
        case "es":
            e = "Espanhol";
            break;
        case "en":
            e = "Inglês";
            break
        }
        d = jQuery(".goog-te-menu-frame:eq(0)").contents().find("span:contains('" + e + "')")
    }
    if (d.length > 0) {
        if (document.createEvent) {
            d[0].dispatchEvent(g);
        } else {
            d[0].click();
        }
    }
    
    document.body.style.top = "0px";

}

function autoTab(input, len, e) {
    var keyCode = (e.which) ? e.which : e.keyCode;
    var filter = keyCode ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
    if (input.value.length >= len && !containsElement(filter,keyCode) && ((keyCode > 47 && keyCode < 58) || (keyCode > 95 && keyCode < 106))) {
        input.value = input.value.slice(0, len);
        setFocusNextInput(input);
    }
    return true;
}

function setFocusNextInput(input) {
    var index = -1, i = 0, found = false, index2 = -1; 		

    while (i < input.form.length && index == -1) {		    
        if (input.form[i] == input)index = i; 
            else i++;
    }

    if(input.form[index+1].parentNode.className != 'processo esconde'){		
        input.form[index+1].focus();
    }

    return true;		
}

function containsElement(arr, ele) { 
    var found = false, index = 0; 
    while (!found && index < arr.length) 
        if (arr[index] == ele) 
            found = true; 
        else 
            index++; 
    return found; 
}

function isNumber(evt){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


function pad(str, max){
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

function setSmoothScroll(){
// by Heather Migliorisi
// Select all links with hashes
jQuery('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = jQuery(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });// Select all links with hashes
}



/* Init */
setTimeout(function() {
    
    jQuery("#form_consulta_processual").attr('onsubmit','return validaNumeroProcesso();');        
    //.focus
    jQuery('input[name="iNrProcessoUnica"]').focus();
        
    //add maxlength
/*
    jQuery('input[name="iNrProcessoUnica"]').attr('onkeyup','return autoTab(this, 7, event);');
    jQuery('input[name="iNrDigitoUnica"]').attr('onkeyup','return autoTab(this, 2, event);');
    jQuery('input[name="iNrProcessoAnounica"]').attr('onkeyup','return autoTab(this, 4, event);');
    jQuery('input[name="iNrJusticaUnica"]').attr('onkeyup','return autoTab(this, 1, event);');
    jQuery('input[name="iNrRegiaoUnica"]').attr('onkeyup','return autoTab(this, 2, event);');
    jQuery('input[name="iNrProcessoVaraUnica"]').attr('onkeyup','return autoTab(this, 4, event);');
    
    jQuery('input[name="iNrProcessoUnica"]').attr('onkeypress','return isNumber(event);');
    jQuery('input[name="iNrDigitoUnica"]').attr('onkeypress','return isNumber(event);');
    jQuery('input[name="iNrProcessoAnounica"]').attr('onkeypress','return isNumber(event);');
    jQuery('input[name="iNrJusticaUnica"]').attr('onkeypress','return isNumber(event);');
    jQuery('input[name="iNrRegiaoUnica"]').attr('onkeypress','return isNumber(event);');
    jQuery('input[name="iNrProcessoVaraUnica"]').attr('onkeypress','return isNumber(event);');
     
    jQuery('input[name="iNrProcessoUnica"]').attr('maxlength',7);
    jQuery('input[name="iNrDigitoUnica"]').attr('maxlength',2);
    jQuery('input[name="iNrProcessoAnoUnica"]').attr('maxlength',4)
    jQuery('input[name="iNrJusticaUnica"]').attr('maxlength',1);
    jQuery('input[name="iNrRegiaoUnica"]').attr('maxlength',2);
    jQuery('input[name="iNrProcessoVaraUnica"]').attr("maxlength",4);
*/    
    jQuery(".contrast_key").attr("href", "#");
    jQuery(".contrast_key").click(function($) {
        drupalHighContrast.toggleHighContrast();
    } );
    
    (function ($) {
    jQuery.fn.pastehopacross = function(opts){ 
       if (!opts){ opts = {} }
        if (!opts.regexRemove){
            opts.regexRemove = false;   
        }
        if (!opts.inputs){
           opts.inputs = [];   
        }
        if (opts.inputs.length == 0){
            //return 
            return $(this);   
        }
 
        if (!opts.first_maxlength){
            opts.first_maxlength = $(this).attr('maxlength');
            if (!opts.first_maxlength){
                return $(this);
            }
        }
        
       $(this).bind('paste', function(){
      
           //remove maxlength attribute
           $(this).removeAttr('maxlength'); 
           $(this).one("input.fromPaste", function(){
               var $firstBox = $(this);

                var pastedValue = $(this).val();
                if (opts.regexRemove){
                     pastedValue = pastedValue.replace(opts.regexRemove, "");
                }
               
                var str_pv = pastedValue;
                $(opts.inputs).each(function(){
                    var pv = str_pv.split('');
                    var maxlength;
                    if ($firstBox.get(0) == this){
                       maxlength = opts.first_maxlength;   
                    }else{
                       maxlength = $(this).attr('maxlength'); 
                    }
                    if (maxlength == undefined){
                        //paste them all!
                        maxlength = pv.length;   
                    }
                    //clear the value
                    $(this).val('');
                    var nwval = '';           
                    for (var i = 0; i < maxlength; ++i){
                        if (typeof(pv[i]) != 'undefined'){
                           nwval += pv[i];
                        }
                    }
                    $(this).val(nwval);
                    //remove everything from earlier
                    str_pv = str_pv.substring(maxlength);
                });
               
                //restore maxlength attribute
                $(this).attr('maxlength', opts.first_maxlength);
            });    
           
       });
       
       return $(this);
    }
})(jQuery);

    jQuery('#iNrProcessoUnica').pastehopacross({regexRemove: /[^\d]/g, inputs:jQuery('input[name^=iNr]')});
      
    setSmoothScroll();


}, 500);




