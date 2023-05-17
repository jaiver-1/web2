function GetGrilla() {
    if ($.fn.dataTable.isDataTable("#tbGrilla")) {
        $("#tbGrilla").DataTable().destroy();
    }
    $("#tbGrilla").DataTable({
        "ajax": {
            type: "POST",
            url: UrlGetEmpleados,
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
                Swal.fire({
                    type: 'warning',
                    title: 'Señor(a) Funcionario(a:)',
                    text: 'No hay Registros'
                });
            }
        },
        language: glOpcionesIdioma,
        responsive: true,
        "columns": [
            {
                data: null, title: "Acción", className: "celdaCenter celda2", render: function (data, type, row) {

                    return resultado = `<div class="dropdown">
                                            <button class="btn btn-success" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span class="fas fa-align-center"></span>
                                            </button>

                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                            <li>
                                                <a class="dropdown-item" href="javascript:OpenModalActualizar('${row.nombres}','${row.apellidos}','${row.identificacion}','${row.email}',)">
                                                    <i class="ti-reload"></i> Editar
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:Eliminar('${row.identificacion}')" class="dropdown-item">
                                                    <i class="ti-trash"></i> Eliminar
                                                </a>
                                            </li>
       
                                        </ul>
                                    </div>`

                },
            },
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
function CrearUsuario() {

    var _EmpleadoDto = {
        NOMBRES: $("#txtNombre").val(),
        APELLIDOS: $("#txtApellidos").val(),
        IDENTIFICACION: $("#txtIdentificacionCrud").val(),
        EMAIL: $("#txtEmail").val()
    };

    $.ajax({
        type: 'POST',
        url: UrlCrearEmpleado,
        data: _EmpleadoDto,
        success: function success(response) {
            if (response.success == true) {
                $("#pn_Grilla").addClass('hidden');
                $('#Modal_VerRegistro').modal("hide");
                Swal.fire({
                    type: 'success',
                    title: 'Señor(a) Funcionario(a:)',
                    text: 'Se Creo El funcionario'
                });

            } else {
                sweetAlert(response.message, "", "warning");
            }
        },
        error: function error(ex) {
            sweetAlert("Error", "No se pudo enviar proyecto, error en el servidor", "error");
        }
    });
}
function ActualizarUsuario() {

    var _EmpleadoDto = {
        NOMBRES: $("#txtNombre").val(),
        APELLIDOS: $("#txtApellidos").val(),
        IDENTIFICACION: $("#txtIdentificacionCrud").val(),
        EMAIL: $("#txtEmail").val()
    };

    $.ajax({
        type: 'POST',
        url: UrlActualizarEmpleado,
        data: _EmpleadoDto,
        success: function success(response) {
            if (response.success == true) {
                $("#pn_Grilla").addClass('hidden');
                $('#Modal_VerRegistro').modal("hide");
                Swal.fire({
                    type: 'success',
                    title: 'Señor(a) Funcionario(a:)',
                    text: 'Se Actualizo El funcionario'
                });


            } else {
                Swal.fire({
                    type: 'success',
                    title: 'Señor(a) Funcionario(a:)',
                    text: 'No Se Encontro El Funcionario '
                });
            }
        },
        error: function error(ex) {
            sweetAlert("Error", "No se pudo enviar proyecto, error en el servidor", "error");
        }
    });
}
function Eliminar(Identificacion) {

    $.ajax({
        type: 'POST',
        url: UrlEliminarEmpleado,
        data: { V_Identificacion: Identificacion },
        success: function success(response) {
            if (response.success == true) {
                $("#pn_Grilla").addClass('hidden');

                Swal.fire({
                    type: 'success',
                    title: 'Señor(a) Funcionario(a:)',
                    text: 'Se Elimino El funcionario'
                });
            } else {
                sweetAlert(response.message, "", "warning");
            }
        },
        error: function error(ex) {
            sweetAlert("Error", "No se pudo enviar proyecto, error en el servidor", "error");
        }
    });
}
function OpenModal() {
    var FooterModal = document.getElementById("FooterModal");
    FooterModal.innerHTML = ` <button tabindex="7606" type="button" id="btnGrabar" onclick="CrearUsuario(); return false;" 
                              style="border-radius: 0px 16px 0px 16px !important;" class="btn btn-grad" title="Guardar"><span class="fa ico_grabar faa-wrench animated"></span> Guardar</button>
                              <button type="button" data-bs-dismiss="modal" style="border-radius: 0px 16px 0px 16px !important;" 
                              class="btn btn-cerrar"><span class="fas fa-sign-out-alt faa-horizontal animated"></span> Cerrar</button> `
    $('#Modal_VerRegistro').modal("show");
}
function OpenModalActualizar(Nombre, Apellidos, Identificacion, Email) {
    $("#txtNombre").val(Nombre);
    $("#txtApellidos").val(Apellidos);
    $("#txtIdentificacionCrud").val(Identificacion);
    $("#txtEmail").val(Email);
    var FooterModal = document.getElementById("FooterModal");
    FooterModal.innerHTML = ` <button tabindex="7606" type="button" id="btnGrabar" onclick="ActualizarUsuario(); return false;" 
                              style="border-radius: 0px 16px 0px 16px !important;" class="btn btn-grad" title="Guardar"><span class="fa ico_grabar faa-wrench animated"></span> Guardar</button>
                              <button type="button" data-bs-dismiss="modal" style="border-radius: 0px 16px 0px 16px !important;" 
                              class="btn btn-cerrar"><span class="fas fa-sign-out-alt faa-horizontal animated"></span> Cerrar</button> `
    $('#Modal_VerRegistro').modal("show");

}