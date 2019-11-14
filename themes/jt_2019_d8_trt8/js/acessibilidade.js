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

// Funcão p Traduzir site
function ChangeLang(f) {
   var e, d = "";
   if (document.createEvent) {
       var g = document.createEvent("HTMLEvents");
       g.initEvent("click", true, true)
   }
   if (f == "pt") {
       d = $(".goog-te-banner-frame:eq(0)").contents().find("button[id*='restore']")
   } else {
       switch (f) {
       case "es":
           e = "Espanhol";
           break;
       case "en":
           e = "Inglês";
           break
       }
       d = $(".goog-te-menu-frame:eq(0)").contents().find("span:contains('" + e + "')")
   }
   if (d.length > 0) {
       if (document.createEvent) {
           d[0].dispatchEvent(g)
       } else {
           d[0].click()
       }
   }
}
function googleTranslateElementInit() {
   new google.translate.TranslateElement({
       pageLanguage: "pt",
       autoDisplay: false,
       includedLanguages: "pt,es,en",
       layout: google.translate.TranslateElement.InlineLayout.SIMPLE
   },"google_translate_element")
}

$(".reset").click(function() {
   $(this).closest('form').find("input[type=text], textarea").val("");
});