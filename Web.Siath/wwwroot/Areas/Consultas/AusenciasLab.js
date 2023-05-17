
function GetGrilla() {
    if ($.fn.dataTable.isDataTable("#tbGrilla")) {
        $("#tbGrilla").DataTable().destroy();
    }
    $("#tbGrilla").DataTable({
        "ajax": {
            type: "POST",
            url: UrlGetAusenciasLaborales,
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
            { "title": "Clase Novedad", "data": "IdTablaEmpleado", "name": "IdTablaEmpleado", className: "celdaJust" },
            { "title": "Clase Novedad", "data": "nombres", "name": "nombres", className: "celdaJust" },
            { "title": "Clase Novedad", "data": "apellidos", "name": "apellidos", className: "celdaJust" },
            { "title": "Clase Novedad", "data": "identificacion", "name": "identificacion", className: "celdaJust" },
            { "title": "Clase Novedad", "data": "email", "name": "email", className: "celdaJust" },
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
