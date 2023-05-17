// js?v=1 version del JS

$("#txtIdentificacion").keypress(function (e) {
    if (e.which == 13) {
        $('#btnConsultarEmpl').click();
    }
});

   
$("#txtFuncionario").autocomplete({
    source: function (request, response) {
        $.ajax({
            url: UrlGetEmpleadoIntel,
            type: "POST",
            dataType: "json",
            data: { V_Busqueda: $("#txtFuncionario").val() },
            success: function (respuesta) {
                response($.map(respuesta.data, function (item) {
                    return { label: item.funcionario, value: item.identificacion };
                }));
            },
            error: function (respuesta) {
                alert("Error");
            }
        });
    },
    minLength: 10,
    select: function (event, ui) {
        $(document.getElementById("txtFuncionario")).val(ui.item.label);
        $('#txtIdentificacion').val(ui.item.value);
        F_GetTarjetaEmpleado();
        return false;
    }
});

function F_GetTarjetaEmpleado() {

    if ($("#txtIdentificacion").val() == "") {
        create('error', 'Debe digitar número de Identificación', '../../img/AlertError.png');
        return;
    }

    $.ajax({
        type: "POST",
        url: UrlGetTarjetaEmpleado,
        async: true,
        data: { V_Identificacion: $("#txtIdentificacion").val() },
        dataType: 'json',
        cache: false,
        success: function (respuesta) {
            if (respuesta.success) {
                $("#txtFuncionario").val(respuesta.data[0].funcionario);
                $("#txtCategoria").val(respuesta.data[0].categoria);
                $("#txtPlaca").val(respuesta.data[0].placaChip);
                $("#txtSiglaFisica").val(respuesta.data[0].siglaFisica);
                $("#txtSiglaLaborando").val(respuesta.data[0].siglaLaborando);
                $("#txtDependencia").val(respuesta.data[0].dependencia);
                $("#txtCargo").val(respuesta.data[0].cargo);
                $("#txtRh").val(respuesta.data[0].grupoSanguineo);
                $("#txtProfesion").val(respuesta.data[0].profesion);
                $("#txtEstadoCivil").val(respuesta.data[0].estadoCivil);
                $("#txtSituacion").val(respuesta.data[0].situacionLaboral);
                $("#txtEstadoEmpl").val(respuesta.data[0].estadoEmpleado);
                $("#txtApto").val(respuesta.data[0].aptitud);
                $("#txtFechaNace").val(respuesta.data[0].fechaNacimiento);
                $("#txtLugarNace").val(respuesta.data[0].lugarNacimiento);

                $("#imgFoto")[0].src = "https://sinac.policia.gov.co:8443/SinacPicture/picture.aspx?DocID=" + respuesta.idEncry + "&Token=Mxl7995Julabdfjughyts1*_58$$";

                //ejecuta la funcion de la grilla que contiene los datos de la vista
                GetGrilla();
            } else {
                Swal.fire({
                    type: 'error',
                    title: 'Señor(a) Funcionario(a:)',
                    text: respuesta.message
                });
            }
        },
        error: function () {
            Swal.fire({
                type: 'error',
                title: 'Señor(a) Funcionario(a:)',
                text: 'No es posible grabar Revise con el Administrador del Sistema!!'
            });
        }
    });
}

function Limpiar() {
    $("#imgFoto")[0].src = "/img/Avatar.png";
    $("#txtFuncionario").val("");
    $("#txtCategoria").val("");
    $("#txtPlaca").val("");
    $("#txtSiglaFisica").val("");
    $("#txtIdentificacion").val("");
    $("#txtSiglaLaborando").val("");
    $("#txtDependencia").val("");
    $("#txtCargo").val("");
    $("#txtRh").val("");
    $("#txtProfesion").val("");
    $("#txtEstadoCivil").val("");
    $("#txtSituacion").val("");
    $("#txtEstadoEmpl").val("");
    $("#txtApto").val("");
    $("#txtFechaNace").val("");
    $("#txtLugarNace").val("");
    LimpiarGrilla();
}
function LimpiarGrilla() {
    if ($.fn.dataTable.isDataTable("#tbGrilla")) {
        $("#tbGrilla").DataTable().destroy();
    }
    $("#tbGrilla").empty();
    $("#pn_Grilla").addClass('hidden');
}