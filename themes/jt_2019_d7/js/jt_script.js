
function toogleAutosFisicos() {
    style = document.querySelector('#consulta_processo').style.display;
    if (style == 'none') {
        document.querySelector('#consulta_processo').style.animation = 'fadein 500ms linear';
        document.querySelector('#consulta_processo').style.display = 'block';
        document.querySelector('#iNrProcessoUnica').focus();
    } else {
        document.querySelector('#consulta_processo').style.display = 'none';
    }
    return false;
}

/* Search accessbility */
setTimeout(function() {
    jQuery(".access-key-4").attr("href", "#");
    jQuery(".access-key-4").click(function($) {
        document.querySelector("#edit-search-block-form--2").focus();
        jQuery("html").animate({scrollTop:70}, 500);
    } );

    jQuery(".access-key-1").attr("href", "#post-content");

    jQuery(".access-high-contrast").attr("href", "#");
    jQuery(".access-high-contrast").click(function($) {
        drupalHighContrast.toggleHighContrast();
    } );

    setSmoothScroll();

}, 500);

var contrast = true;

function setContrast() {
  if (contrast) {
      contrast = false;
      drupalHighContrast.enableStyles();
  } else {
      contrast = true;
      drupalHighContrast.disableStyles();
  }
}

/*
(function($) {
   console.log("xxx");
   $(".access-key-1").attr("href", "#");
   $(".access-key-1").click(function($) { document.querySelector("#edit-search-block-form--2").focus(); } );
})(jQuery);
*/

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

function autoTab(input, len, e) {
    var keyCode = (e.which) ? e.which : e.keyCode;
    var filter = keyCode ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
    if (input.value.length >= len && !containsElement(filter,keyCode) && ((keyCode > 47 && keyCode < 58) || (keyCode > 95 && keyCode < 106))) {
        input.value = input.value.slice(0, len);
        setFocusNextInput(input);
    }
    return true;
}

function isNumber(evt){
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function validaConsulta(){
	if (document.querySelector("#iNrProcessoUnica").value==""){
		alert("Informe o número do processo.");
        document.querySelector("#iNrProcessoUnica").focus();
		return false;
	}
	if (document.querySelector("#iNrProcessoAnoUnica").value==""){
		alert("Informe o ano do processo.");
        document.querySelector("#iNrProcessoAnoUnica").focus();
		return false;
	}
	if (document.querySelector("#iNrProcessoVaraUnica").value==""){
		alert("Informe o código da Vara.");
        document.querySelector("#iNrProcessoVaraUnica").focus();
		return false;
	}
    document.querySelector("#consulta_processo").submit();
    return true;
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
