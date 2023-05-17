
function GetGrilla() {
    if ($.fn.dataTable.isDataTable("#tbGrilla")) {
        $("#tbGrilla").DataTable().destroy();
    }
    $("#tbGrilla").DataTable({
        "ajax": {
            type: "POST",
            url: UrlGetRegimenPrestacional,
            async: true,
            data: { V_Identificacion: $("#txtIdentificacion").val() },
            datatype: "json",
            cache: false
        },
        "initComplete": function (settings, json) {
            if (json.success) {
                $("#pn_Grilla").removeClass('hidden');
            }
            else {
                $("#pn_Grilla").addClass('hidden');
            }
        },
        language: glOpcionesIdioma,
        responsive: true,
        "columns": [
            { "title": "Disposición", "data": "disposicion", "name": "disposicion", className: "celdaCenter celda8" },
            { "title": "Clase Régimen", "data": "claseRegimen", "name": "claseRegimen", className: "celdaJust celda8" },
            { "title": "Descripción Regimen", "data": "descripcionRegimen", "name": "descripcionRegimen", className: "celdaJust" },            
            { "title": "Días Vacaciones Régimen", "data": "diasVacacionesRegimen", "name": "diasVacacionesRegimen", className: "celdaCenter celda5" },
            { "title": "Número Regimen", "data": "numeroRegimen", "name": "numeroRegimen", className: "celdaCenter celda5" },
            { "title": "Fecha Inicio", "data": "fechaInicio", "name": "fechaInicio", className: "celdaCenter celda6" },
            { "title": "Fecha Término", "data": "fechaTermino", "name": "fechaTermino", className: "celdaCenter celda6" },
            { "title": "Clase Disposicion", "data": "claseDisposicion", "name": "claseDisposicion", className: "celdaCenter celda5" },
            { "title": "Número Disposicion", "data": "numeroDisposicion", "name": "numeroDisposicion", className: "celdaCenter celda6" },
            { "title": "Fecha Disposición", "data": "fechaDisposicion", "name": "fechaDisposicion", className: "celdaCenter celda6" }
        ],
        lengthMenu: [
            [10, 25, 50, -1],
            ['10 registros', '25 registros', '50 registros', 'Todos']
        ],
        ordering: false,
        pageLength: 10,
        bLengthChange: false,
        searching: true,
        paging: true,
        info: true
    });
}