
/* IMPORTAÇÕES */

import TemplateFunctions from '/js/modules/Template.js';
import Home from '/js/modules/Home.js';

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