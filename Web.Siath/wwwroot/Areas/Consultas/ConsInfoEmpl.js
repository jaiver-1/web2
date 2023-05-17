$("#txtIdentificacion").keypress(function (e) {
    if (e.which == 13) {
        $('#btnConsultarEmpl').click();
    }
});
$("#ddlDtoExpedicion").change(function () {
    $("#ddlLugarExpedicion").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetMunicipios,
        dataType: 'json',
        data: { V_IdLugar: $("#ddlDtoExpedicion").val() },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlLugarExpedicion").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });
            $("#ddlLugarExpedicion").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista Lugar Exp!!!');
        }
    });
});
$("#ddlDtoNace").change(function () {
    $("#ddlLugarNace").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetMunicipios,
        dataType: 'json',
        data: { V_IdLugar: $("#ddlDtoNace").val() },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlLugarNace").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });
            $("#ddlLugarNace").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la list LugarNace !!!');
        }
    });
});
$("#ddlDtoReside").change(function () {
    $("#ddlLugarReside").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetMunicipios,
        dataType: 'json',
        data: { V_IdLugar: $("#ddlDtoReside").val() },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlLugarReside").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });
            $("#ddlLugarReside").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista LugarReside !!!');
        }
    });
});
$("#ddlFisicaAtendido").change(function () {
    $("#ddlUndeAtendido").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetDependencias,
        dataType: 'json',
        data: { V_Fisica: $("#ddlFisicaAtendido").val() },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlUndeAtendido").append('<option value="' + resultado.idUnidad + '">' + resultado.descripcion + '</option>');
            });
            $("#ddlUndeAtendido").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista UndeAtendido !!!');
        }
    });
});
$("#ddlSiglaFisica").change(function () {
    $("#ddlUndeLaborando").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetDependencias,
        dataType: 'json',
        data: { V_Fisica: $("#ddlSiglaFisica").val() },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlUndeLaborando").append('<option value="' + resultado.idUnidad + '">' + resultado.descripcion + '</option>');
            });
            $("#ddlUndeLaborando").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista UndeLaborando !!!');
        }
    });
});
$("#ddlLugarReside").change(function () {
    $("#ddlBarrioReside").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetBarrios,
        dataType: 'json',
        data: { V_IdLugar: $("#ddlLugarReside").val() },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlBarrioReside").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });
            $("#ddlBarrioReside").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista BarrioReside !!!');
        }
    });
});

function F_GetInfoEmpleado() {

    if ($("#txtIdentificacion").val() == "") {
        create('error', 'Debe digitar número de Identificación', '../../img/AlertError.png');
        return;
    }

    $.ajax({
        type: "POST",
        url: UrlGetInfoEmpleado,
        async: true,
        data: { V_Identificacion: $("#txtIdentificacion").val() },
        dataType: 'json',
        cache: false,
        success: function (respuesta) {
            if (respuesta.success) {                
                $("#txtFechaExpedicion").val(respuesta.data[0].fechaExpedicion);
                $("#txtApellidos").val(respuesta.data[0].apellidos);
                $("#txtNombres").val(respuesta.data[0].nombre);
                $("#txtHojaVida").val(respuesta.data[0].hojaDeVida);
                $("#txtHojaDeVidaNumero").val(respuesta.data[0].hojaDeVidaNumero);
                $("#txtTipoUnidad").val(respuesta.data[0].tipoUnidad);
                $("#txtSigla").val(respuesta.data[0].sigla);
                $("#txtFechaNace").val(respuesta.data[0].fechaNacimiento);
                $("#txtCodigoMilitar").val(respuesta.data[0].codigoMilitar);
                $("#txtLibretaMilitar").val(respuesta.data[0].LibretaMilitar);
                $("#txtFechaLibreta").val(respuesta.data[0].fechaLibreta);
                $("#txtPlaca").val(respuesta.data[0].placa);
                $("#txtPlacaChip").val(respuesta.data[0].placaChip);
                $("#txtNiup").val(respuesta.data[0].placaChip);
                $("#txtNumeroCurso").val(respuesta.data[0].numeroCurso);
                $("#txtTelefono").val(respuesta.data[0].telefono);
                $("#txtDireccionResidencia").val(respuesta.data[0].direccionResidencia);
                $("#txtCelular").val(respuesta.data[0].celular);
                $("#txtCorreo").val(respuesta.data[0].correo);
                $("#txtFechaDefuncion").val(respuesta.data[0].fechaDeDefuncion);
                $("#txtRegisDefuncion").val(respuesta.data[0].restroDeDefuncion);
                $("#txtCargo").val(respuesta.data[0].cargo);

                var TipoSangre = respuesta.data[0].grupoSanguineo;

                if (TipoSangre == "O") {
                    $("#RadTipoO").prop("checked", true);
                }
                else if (TipoSangre == "A") {
                    $("#RadTipoA").prop("checked", true);
                }
                else if (TipoSangre == "B") {
                    $("#RadTipoB").prop("checked", true);
                }
                else if (TipoSangre == "AB") {
                    $("#RadTipoAB").prop("checked", true);
                }
                else {
                    $("#RadTipoNR").prop("checked", true);
                }


                $("#ddlFuerza").val(respuesta.data[0].undeFuerza);
                $('#ddlFuerza').trigger('change.select2');
                $("#ddlFuerza").trigger("chosen:updated");

                $("#ddlTipoDoc").val(respuesta.data[0].tipoDocumento);
                $('#ddlTipoDoc').trigger('change.select2');
                $("#ddlTipoDoc").trigger("chosen:updated");

                $("#ddlEstadoEmpl").val(respuesta.data[0].estadoEmpleado);
                $('#ddlEstadoEmpl').trigger('change.select2');
                $("#ddlEstadoEmpl").trigger("chosen:updated");

                $("#ddlFuerzaLabora").val(respuesta.data[0].fuerzaLaborando);
                $('#ddlFuerzaLabora').trigger('change.select2');
                $("#ddlFuerzaLabora").trigger("chosen:updated");

                $("#ddlRaza").val(respuesta.data[0].idRaza);
                $('#ddlRaza').trigger('change.select2');
                $("#ddlRaza").trigger("chosen:updated");

                $("#ddlClaseLibreta").val(respuesta.data[0].claseLibreta);
                $('#ddlClaseLibreta').trigger('change.select2');
                $("#ddlClaseLibreta").trigger("chosen:updated");

                $("#ddlSexo").val(respuesta.data[0].sexo);
                $('#ddlSexo').trigger('change.select2');
                $("#ddlSexo").trigger("chosen:updated");

                $("#ddlEstadoCivil").val(respuesta.data[0].estadoCivil);
                $('#ddlEstadoCivil').trigger('change.select2');
                $("#ddlEstadoCivil").trigger("chosen:updated");

                $("#ddlRH").val(respuesta.data[0].rh);
                $('#ddlRH').trigger('change.select2');
                $("#ddlRH").trigger("chosen:updated");

                $("#ddlVacacional").val(respuesta.data[0].centroVacacional);
                $('#ddlVacacional').trigger('change.select2');
                $("#ddlVacacional").trigger("chosen:updated");

                $("#ddlSanidad").val(respuesta.data[0].sanidad);
                $('#ddlSanidad').trigger('change.select2');
                $("#ddlSanidad").trigger("chosen:updated");

                $("#ddlCentroSocial").val(respuesta.data[0].centroSocial);
                $('#ddlCentroSocial').trigger('change.select2');
                $("#ddlCentroSocial").trigger("chosen:updated");

                $("#ddlEdificioDipon").val(respuesta.data[0].edificioDipon);
                $('#ddlEdificioDipon').trigger('change.select2');
                $("#ddlEdificioDipon").trigger("chosen:updated");

                $("#ddlPonalAtendido").val(respuesta.data[0].ponalAtendido);
                $('#ddlPonalAtendido').trigger('change.select2');
                $("#ddlPonalAtendido").trigger("chosen:updated");

                $("#ddlFuerzaAtendido").val(respuesta.data[0].fuerzaAtendido);
                $('#ddlFuerzaAtendido').trigger('change.select2');
                $("#ddlFuerzaAtendido").trigger("chosen:updated");

                $("#ddlDtoExpedicion").val(respuesta.data[0].idDepartamentoExpedicion);
                $('#ddlDtoExpedicion').trigger('change.select2');
                $("#ddlDtoExpedicion").trigger("chosen:updated");

                $("#ddlDtoNace").val(respuesta.data[0].idDepartamentoNacimiento);
                $('#ddlDtoNace').trigger('change.select2');
                $("#ddlDtoNace").trigger("chosen:updated");

                $("#ddlDtoReside").val(respuesta.data[0].idDepartamentoResidencia);
                $('#ddlDtoReside').trigger('change.select2');
                $("#ddlDtoReside").trigger("chosen:updated");

                $("#ddlReclutamiento").val(respuesta.data[0].idReclutamiento);
                $('#ddlReclutamiento').trigger('change.select2');
                $("#ddlReclutamiento").trigger("chosen:updated");

                $("#ddlSituacionLaboral").val(respuesta.data[0].idSituacionLaboral);
                $('#ddlSituacionLaboral').trigger('change.select2');
                $("#ddlSituacionLaboral").trigger("chosen:updated");

                $("#ddlGrado").val(respuesta.data[0].gradoAlfabetico);
                $('#ddlGrado').trigger('change.select2');
                $("#ddlGrado").trigger("chosen:updated");


                if (respuesta.data[0].ponalAtendido == 'NO') {
                    $("#ddlFisicaAtendido").attr("disabled", true);
                    $("#PnEntidadPonal").addClass('hidden');
                    $("#PnEntidad").removeClass('hidden');
                    $("#txtEntidadAtendido").val(respuesta.data[0].entidadAtendido);

                    $("#ddlFisicaAtendido").val("");
                    $('#ddlFisicaAtendido').trigger('change.select2');
                    $("#ddlFisicaAtendido").trigger("chosen:updated");

                    $("#ddlUndeAtendido").val("");
                    $('#ddlUndeAtendido').trigger('change.select2');
                    $("#ddlUndeAtendido").trigger("chosen:updated");

                }
                else {
                    $("#ddlFisicaAtendido").attr("disabled", false);
                    $("#PnEntidadPonal").removeClass('hidden');
                    $("#PnEntidad").addClass('hidden');
                    $("#txtEntidadAtendido").val("");
                }

                GetSiglasAll(respuesta.data[0].fisica);
                GetSiglasAllAtendido(respuesta.data[0].fisicaAtendido);
                GetDependenciaAll(respuesta.data[0].fisica, respuesta.data[0].undeLaborando);
                GetDependenciaAllAtendido(respuesta.data[0].fisicaAtendido, respuesta.data[0].idUndeAtendido);
                GetMunicipiosExpedicion(respuesta.data[0].idDepartamentoExpedicion, respuesta.data[0].idLugarExpedicion);
                GetMunicipiosNace(respuesta.data[0].idDepartamentoNacimiento, respuesta.data[0].idLugarNacimiento);
                GetMunicipiosReside(respuesta.data[0].idDepartamentoResidencia, respuesta.data[0].idLugarResidencia);
                GetBarrioReside(respuesta.data[0].idLugarResidencia, respuesta.data[0].idBarrioResidencia);
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
function GetBarrioReside(IdMunicipio_, IdBarrioReside) {
    $("#ddlLugarReside").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetBarrios,
        dataType: 'json',
        data: { V_IdLugar: IdMunicipio_ },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlBarrioReside").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });

            $("#ddlBarrioReside").val(IdBarrioReside);
            $('#ddlBarrioReside').trigger('change.select2');
            $("#ddlBarrioReside").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la list BarrioResides !!!');
        }
    });
}
function GetDepartamentos() {
    //Limpiar el campo
    $("#ddlDtoExpedicion").empty();
    $("#ddlDtoNace").empty();
    $("#ddlDtoReside").empty();

    $.ajax({
        type: 'POST',
        url: UrlGetDepartamentos,
        async: false,
        dataType: 'json',
        success: function (respuesta) {
            $.each(respuesta.data, function (i, dato) {
                $("#ddlDtoExpedicion").append('<option value="' + dato.idLugar + '">' + dato.descripcion + '</option>');
                $("#ddlDtoNace").append('<option value="' + dato.idLugar + '">' + dato.descripcion + '</option>');
                $("#ddlDtoReside").append('<option value="' + dato.idLugar + '">' + dato.descripcion + '</option>');
            });
            $("#ddlDtoExpedicion").trigger("chosen:updated");
            $("#ddlDtoNace").trigger("chosen:updated");
            $("#ddlDtoReside").trigger("chosen:updated");
        },
        error: function (ex) {
            ModalError("Señor(a) Funcionario(a:)", "No es posible cargar la lista, revise");
        }
    });
}
function GetDependenciaAll(P_Sigla, undeLaborando) {
    $("#ddlUndeLaborando").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetDependenciasAll,
        //async: false,
        dataType: 'json',
        data: { V_Fisica: P_Sigla },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlUndeLaborando").append('<option value="' + resultado.idUnidad + '">' + resultado.descripcion + '</option>');
            });
            //Aplicamos el filtro de la unidad donde labora el Funcionario
            $("#ddlUndeLaborando").val(undeLaborando);
            $('#ddlUndeLaborando').trigger('change.select2');
            $("#ddlUndeLaborando").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista Dependencias Labora!!!');
        }
    });
}
function GetDependenciaAllAtendido(P_Sigla, undeAtendido) {
    $("#ddlUndeAtendido").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetDependenciasAll,
        //async: false,
        dataType: 'json',
        data: { V_Fisica: P_Sigla },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlUndeAtendido").append('<option value="' + resultado.idUnidad + '">' + resultado.descripcion + '</option>');
            });
            //Aplicamos el filtro de la unidad donde labora el Funcionario
            $("#ddlUndeAtendido").val(undeAtendido);
            $('#ddlUndeAtendido').trigger('change.select2');
            $("#ddlUndeAtendido").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista Dependencia Atendido !!!');
        }
    });
}
function GetMunicipiosExpedicion(IdDto, IdMunicipio) {
    $("#ddlLugarExpedicion").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetMunicipios,
        //async: false,
        dataType: 'json',
        data: { V_IdLugar: IdDto },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlLugarExpedicion").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });

            $("#ddlLugarExpedicion").val(IdMunicipio);
            $('#ddlLugarExpedicion').trigger('change.select2');
            $("#ddlLugarExpedicion").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista Municipio Exp !!!');
        }
    });
}
function GetMunicipiosNace(IdDto, IdMunicipio) {
    $("#ddlLugarNace").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetMunicipios,
        //async: false,
        dataType: 'json',
        data: { V_IdLugar: IdDto },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlLugarNace").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });

            $("#ddlLugarNace").val(IdMunicipio);
            $('#ddlLugarNace').trigger('change.select2');
            $("#ddlLugarNace").trigger("chosen:updated");
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista Lugar Nace!!!');
        }
    });
}
function GetMunicipiosReside(IdDto, IdMunicipio) {
    $("#ddlLugarReside").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetMunicipios,
        //async: false,
        dataType: 'json',
        data: { V_IdLugar: IdDto },
        success: function (result) {
            $.each(result.data, function (i, resultado) {
                $("#ddlLugarReside").append('<option value="' + resultado.idLugar + '">' + resultado.descripcion + '</option>');
            });

            $("#ddlLugarReside").val(IdMunicipio);
            $('#ddlLugarReside').trigger('change.select2');
            $("#ddlLugarReside").trigger("chosen:updated");
            
        },
        error: function (ex) {
            alert('Seleccione una opción de la lista MunReside !!!');
        }
    });
}
function GetSiglas() {
    //Limpiar el campo
    $("#ddlSiglaFisica").empty();
    $("#ddlFisicaAtendido").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetSiglas,
        dataType: 'json',
        success: function (respuesta) {
            $.each(respuesta.data, function (i, dato) {
                $("#ddlSiglaFisica").append('<option value="' + dato.descripcion + '">' + dato.descripcion + '</option>');
                $("#ddlFisicaAtendido").append('<option value="' + dato.descripcion + '">' + dato.descripcion + '</option>');
            });
            $("#ddlSiglaFisica").trigger("chosen:updated");
            $("#ddlFisicaAtendido").trigger("chosen:updated");
        },
        error: function (ex) {
            ModalError("Señor(a) Funcionario(a:)", "No es posible cargar la lista, revise");
        }
    });
}
function GetSiglasAll(V_Sigla) {
    //Limpiar el campo
    $("#ddlSiglaFisica").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetSiglasAll,
        dataType: 'json',
        success: function (respuesta) {
            $.each(respuesta.data, function (i, dato) {
                $("#ddlSiglaFisica").append('<option value="' + dato.descripcion + '">' + dato.descripcion + '</option>');
            });

            $("#ddlSiglaFisica").val(V_Sigla);
            $('#ddlSiglaFisica').trigger('change.select2');
            $("#ddlSiglaFisica").trigger("chosen:updated");

        },
        error: function (ex) {
            ModalError("Señor(a) Funcionario(a:)", "No es posible cargar la lista, revise");
        }
    });
}
function GetSiglasAllAtendido(V_Sigla) {
    //Limpiar el campo
    $("#ddlFisicaAtendido").empty();
    $.ajax({
        type: 'POST',
        url: UrlGetSiglasAll,
        dataType: 'json',
        success: function (respuesta) {
            $.each(respuesta.data, function (i, dato) {
                $("#ddlFisicaAtendido").append('<option value="' + dato.descripcion + '">' + dato.descripcion + '</option>');
            });

            $("#ddlFisicaAtendido").val(V_Sigla);
            $('#ddlFisicaAtendido').trigger('change.select2');
            $("#ddlFisicaAtendido").trigger("chosen:updated");

        },
        error: function (ex) {
            ModalError("Señor(a) Funcionario(a:)", "No es posible cargar la lista, revise");
        }
    });
}

function Limpiar() {

    $("#txtHojaDeVidaNumero").val("");
    $("#txtNiup").val("");

    $("#ddlFuerza").val("");
    $('#ddlFuerza').trigger('change.select2');
    $("#ddlFuerza").trigger("chosen:updated");

    $("#ddlTipoDoc").val("");
    $('#ddlTipoDoc').trigger('change.select2');
    $("#ddlTipoDoc").trigger("chosen:updated");

    $("#ddlDtoExpedicion").val("0");
    $('#ddlDtoExpedicion').trigger('change.select2');
    $("#ddlDtoExpedicion").trigger("chosen:updated");

    $("#ddlLugarExpedicion").val("0");
    $('#ddlLugarExpedicion').trigger('change.select2');
    $("#ddlLugarExpedicion").trigger("chosen:updated");

    $("#ddlGrado").val("");
    $('#ddlGrado').trigger('change.select2');
    $("#ddlGrado").trigger("chosen:updated");

    $("#ddlEstadoEmpl").val("");
    $('#ddlEstadoEmpl').trigger('change.select2');
    $("#ddlEstadoEmpl").trigger("chosen:updated");

    $("#ddlFisicaAtendido").val("");
    $('#ddlFisicaAtendido').trigger('change.select2');
    $("#ddlFisicaAtendido").trigger("chosen:updated");

    $("#ddlSiglaFisica").val("");
    $('#ddlSiglaFisica').trigger('change.select2');
    $("#ddlSiglaFisica").trigger("chosen:updated");

    $("#txtIdentificacion").val("");
    $("#txtLugarExpPertenece").val("");
    $("#txtFechaExpedicion").val("");
    $("#txtApellidos").val("");
    $("#txtNombres").val("");
    $("#txtHojaVida").val("");
    $("#txtHojaVidaNumero").val("");

    GetSiglas();
    $("#ddlFuerzaLabora").val("");
    $('#ddlFuerzaLabora').trigger('change.select2');
    $("#ddlFuerzaLabora").trigger("chosen:updated");

    $("#ddlUndeLaborando").val("0");
    $('#ddlUndeLaborando').trigger('change.select2');
    $("#ddlUndeLaborando").trigger("chosen:updated");

    $("#ddlUndeAtendido").val("0");
    $('#ddlUndeAtendido').trigger('change.select2');
    $("#ddlUndeAtendido").trigger("chosen:updated");

    $("#txtTipoUnidad").val("");
    $("#txtSigla").val("");
    $("#txtFisica").val("");

    $("#ddlSituacionLaboral").val("");
    $('#ddlSituacionLaboral').trigger('change.select2');
    $("#ddlSituacionLaboral").trigger("chosen:updated");

    $("#txtFechaNace").val("");

    $("#ddlDtoNace").val("0");
    $('#ddlDtoNace').trigger('change.select2');
    $("#ddlDtoNace").trigger("chosen:updated");

    $("#ddlLugarNace").val("0");
    $('#ddlLugarNace').trigger('change.select2');
    $("#ddlLugarNace").trigger("chosen:updated");

    $("#ddlRaza").val("");
    $('#ddlRaza').trigger('change.select2');
    $("#ddlRaza").trigger("chosen:updated");

    $("#txtCodigoMilitar").val("");
    $("#txtLibretaMilitar").val("");

    $("#ddlClaseLibreta").val("");
    $('#ddlClaseLibreta').trigger('change.select2');
    $("#ddlClaseLibreta").trigger("chosen:updated");

    $("#txtFechaLibreta").val("");

    $("#ddlReclutamiento").val("");
    $('#ddlReclutamiento').trigger('change.select2');
    $("#ddlReclutamiento").trigger("chosen:updated");

    $("#ddlSexo").val("");
    $('#ddlSexo').trigger('change.select2');
    $("#ddlSexo").trigger("chosen:updated");

    $("#ddlEstadoCivil").val("");
    $('#ddlEstadoCivil').trigger('change.select2');
    $("#ddlEstadoCivil").trigger("chosen:updated");

    $("#ddlRH").val("");
    $('#ddlRH').trigger('change.select2');
    $("#ddlRH").trigger("chosen:updated");

    $("#txtPlaca").val("");
    $("#txtPlacaChip").val("");
    $("#RadTipoNR").prop("checked", true);
    $("#txtNumeroCurso").val("");
    $("#txtDireccionResidencia").val("");

    $("#ddlDtoReside").val("0");
    $('#ddlDtoReside').trigger('change.select2');
    $("#ddlDtoReside").trigger("chosen:updated");

    $("#ddlLugarReside").val("0");
    $('#ddlLugarReside').trigger('change.select2');
    $("#ddlLugarReside").trigger("chosen:updated");

    $("#ddlBarrioReside").val("0");
    $('#ddlBarrioReside').trigger('change.select2');
    $("#ddlBarrioReside").trigger("chosen:updated");

    $("#txtTelefono").val("");
    $("#txtCelular").val("");
    $("#txtCorreo").val("");

    $("#ddlVacacional").val("");
    $('#ddlVacacional').trigger('change.select2');
    $("#ddlVacacional").trigger("chosen:updated");

    $("#ddlSanidad").val("");
    $('#ddlSanidad').trigger('change.select2');
    $("#ddlSanidad").trigger("chosen:updated");

    $("#ddlCentroSocial").val("");
    $('#ddlCentroSocial').trigger('change.select2');
    $("#ddlCentroSocial").trigger("chosen:updated");

    $("#ddlEdificioDipon").val("");
    $('#ddlEdificioDipon').trigger('change.select2');
    $("#ddlEdificioDipon").trigger("chosen:updated");

    $("#txtIdCargo").val("");
    $("#txtCargo").val("");

    $("#ddlUniEmpreSanidad").val("");
    $('#ddlUniEmpreSanidad').trigger('change.select2');
    $("#ddlUniEmpreSanidad").trigger("chosen:updated");

    $("#txtUnidadSanidad").val("");

    $("#txtFechaPresuncion").val("");
    $("#txtFechaDefuncion").val("");
    $("#txtRegisDefuncion").val("");
    $("#txtFuerzaAtendido").val("");

    $("#ddlFuerzaAtendido").val("");
    $('#ddlFuerzaAtendido').trigger('change.select2');
    $("#ddlFuerzaAtendido").trigger("chosen:updated");

    $("#ddlPonalAtendido").val("");
    $('#ddlPonalAtendido').trigger('change.select2');
    $("#ddlPonalAtendido").trigger("chosen:updated");

    $("#txtEntidadAtendido").val("");
    $("#PnEntidad").addClass('hidden');
    $("#PnEntidadPonal").removeClass('hidden');
    $("#ddlFisicaAtendido").attr("disabled", false);
}