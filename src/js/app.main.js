
/* IMPORTAÇÕES */

import TemplateFunctions from '/src/js/Template.js';
import Home from '/src/js/pages/Home.js';

/* INSTANCIA CLASSES */

const template = new TemplateFunctions;
const home = new Home;

/* RUN EVENTOS HABILITANDO JQUERY */

$(function()
{
    if ($("body.current-page-home").length > 0)
    {
        home.init();        
    }

    $(window).resize(function()
    {
    });

    window.onload = function()
    {   
        template.init();
    }();
});