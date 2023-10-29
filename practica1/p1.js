$(document).ready(function () {

    $("#contador").click(function () {

        let funcion = $("#contador").val();

        if (funcion == "Ver nº enlaces") {

            let enlaces = $("a");
           // console.log(enlaces)

            $("#mostrar").val(enlaces.length);
            $("#contador").val("ver nº parrafos");

        
        }
        else {

            let parrafos = $("p");
            $("#mostrar").val(parrafos.length);
            $("#contador").val("Ver nº enlaces");

            
        }
        

    });

    $("#parrafos").click(function () {

        let funcion = $("#parrafos").val();
        let nuevo_parrafo = "<p>NUEVO PÁRRAFO</p>";

        if (funcion == "Añadir párrafo") {

            $("#contenido").append(nuevo_parrafo);
            $("#parrafos").val("Eliminar parrafo");


        } else {

            let parrafos = $("p");
            let parrafo = parrafos[parrafos.length - 1];
            parrafo.remove();
             $("#parrafos").val("Añadir párrafo");


        }

    });

    $("#fondo").click(function () {

        let funcion = $("#fondo").val();
        if (funcion == "Poner fondo") { 

            $("#contenido").css("background-color", "cyan");
            $("#fondo").val("quitar fondo");


        }

        else {

            $("#contenido").css("background-color", "white");
            
             $("#fondo").val("Poner fondo");


        }

    });






     
    


});