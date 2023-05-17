using Microsoft.EntityFrameworkCore;

namespace Datos.Siath.Models
{
    public partial class ModeloContext: DbContext
    {

        public ModeloContext()
        {
            
        }
        public ModeloContext(DbContextOptions<ModeloContext> options)
           : base(options)
        {
        }
        public virtual DbSet<Apiusuario> Apiusuarios { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("USR_SATDE")
                .UseCollation("USING_NLS_COMP");

            modelBuilder.Entity<Apiusuario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("APIUSUARIO");

                entity.Property(e => e.EmplConsecutivo)
                    .HasColumnType("NUMBER")
                    .HasColumnName("EMPL_CONSECUTIVO");

                entity.Property(e => e.EmplUndeConsecutivo)
                    .HasColumnType("NUMBER")
                    .HasColumnName("EMPL_UNDE_CONSECUTIVO");

                entity.Property(e => e.EmplUndeFuerza)
                    .HasColumnType("NUMBER")
                    .HasColumnName("EMPL_UNDE_FUERZA");

                entity.Property(e => e.FechaCreacion)
                    .HasColumnType("DATE")
                    .HasColumnName("FECHA_CREACION");

                entity.Property(e => e.IdCargo)
                    .HasColumnType("NUMBER")
                    .HasColumnName("ID_CARGO");

                entity.Property(e => e.IdTipoUsuario)
                    .HasColumnType("NUMBER")
                    .HasColumnName("ID_TIPO_USUARIO");

                entity.Property(e => e.IdUsuario)
                    .HasColumnType("NUMBER")
                    .HasColumnName("ID_USUARIO");

                entity.Property(e => e.Identificacion)
                    .HasColumnType("NUMBER")
                    .HasColumnName("IDENTIFICACION");

                entity.Property(e => e.MaquinaCreacion)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("MAQUINA_CREACION");

                entity.Property(e => e.UsuarioCreacion)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO_CREACION");

                entity.Property(e => e.UsuarioEmpresarial)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("USUARIO_EMPRESARIAL");

                entity.Property(e => e.Vigente)
                    .HasPrecision(1)
                    .HasColumnName("VIGENTE");
            });

            modelBuilder.HasSequence("ALMACENADO_SEQ");

            modelBuilder.HasSequence("ARCOI_AUDITORIA_INGRESO_SEQ");

            modelBuilder.HasSequence("ARCOI_CONCLU_SEQ");

            modelBuilder.HasSequence("ARCOI_CORRESP_SEQ");

            modelBuilder.HasSequence("ARCOI_EJECUTA_SEQ");

            modelBuilder.HasSequence("ARCOI_EQUIPOAU_SEQ");

            modelBuilder.HasSequence("ARCOI_EVALUACION_A_SEQ");

            modelBuilder.HasSequence("ARCOI_EVALUACION_L_SEQ");

            modelBuilder.HasSequence("ARCOI_EXP_PLAN_SEQ");

            modelBuilder.HasSequence("ARCOI_FORTALEZA_SEQ");

            modelBuilder.HasSequence("ARCOI_HALLAZGOS_SEQ");

            modelBuilder.HasSequence("ARCOI_OBJ_ESPEC_SEQ");

            modelBuilder.HasSequence("ARCOI_PLAN_RESPO_SEQ");

            modelBuilder.HasSequence("ARCOI_PLANE_SEQ");

            modelBuilder.HasSequence("ARCOI_PROC_PLAN_SEQ");

            modelBuilder.HasSequence("ARCOI_PROGRAMACION_SEQ");

            modelBuilder.HasSequence("ARCOI_RECOMENDA_SEQ");

            modelBuilder.HasSequence("ARCOI_USUARIOS_SEQ");

            modelBuilder.HasSequence("AUXMUT_BENE_AFILIACION_SEQ");

            modelBuilder.HasSequence("AUXMUT_EMPL_AFILIACION_SEQ");

            modelBuilder.HasSequence("BIESO_BIENESTAR_SOCIAL_SEQ");

            modelBuilder.HasSequence("BR_ACREENCIAS_OBLIGACIONES_SEQ");

            modelBuilder.HasSequence("BR_ACTIVIDAD_ECONOMICA_SEQ");

            modelBuilder.HasSequence("BR_BIENES_PATRIMONIALES_SEQ");

            modelBuilder.HasSequence("BR_BIENES_RENTAS_SEQ");

            modelBuilder.HasSequence("BR_CORP_SOCIEDAD_SEQ");

            modelBuilder.HasSequence("BR_CUENTAS_CTES_AHORRO_SEQ");

            modelBuilder.HasSequence("BR_J_CON_DIRECTIVOS_SEQ");

            modelBuilder.HasSequence("BR_PARIENTES_GRADO_SEQ");

            modelBuilder.HasSequence("BR_SOCIEDAD_CONYUGAL_SEQ");

            modelBuilder.HasSequence("CARRERA_PARTICIPANTE_SEQ");

            modelBuilder.HasSequence("CARRERA_PARTICPACION_SEQ");

            modelBuilder.HasSequence("CARRERA_PROCESO_SEQ");

            modelBuilder.HasSequence("CATEGORIA_SEQ");

            modelBuilder.HasSequence("CTRL_AUDITORIA_PROCESOS_SI_SEQ");

            modelBuilder.HasSequence("DINCO_DETALLE_SEQ");

            modelBuilder.HasSequence("DINCO_TIPO_DETALLE_SEQ");

            modelBuilder.HasSequence("DINCO_TIPO_UNIDAD_SEQ");

            modelBuilder.HasSequence("DINCO_UNIDAD_INCORPORACION_SEQ");

            modelBuilder.HasSequence("DIPOL_CANTIDAD_ACTIVA_SQ");

            modelBuilder.HasSequence("DIPOL_ECONO_CNR_SEQ");

            modelBuilder.HasSequence("DIPOL_ECONO_OI_SEQ");

            modelBuilder.HasSequence("DIPOL_ECONO_TC_SEQ");

            modelBuilder.HasSequence("DIPOL_ENVIO_ESTUDIO_SEQ");

            modelBuilder.HasSequence("DIPOL_ENVIO_TEST_CRED_SEQ");

            modelBuilder.HasSequence("DIPOL_O_FAMILIARES_SEQ");

            modelBuilder.HasSequence("DIPOL_O_FAMINS_SEQ");

            modelBuilder.HasSequence("DIPOL_REG_IDIO_SEQ");

            modelBuilder.HasSequence("DIPOL_REG_PRIN_SEQ");

            modelBuilder.HasSequence("ESCALAFON_CICLO_SEQ");

            modelBuilder.HasSequence("ESCALAFON_INSCRI_SEQ");

            modelBuilder.HasSequence("ESP_ASISTENTES_SEQ");

            modelBuilder.HasSequence("ESP_COMPROMISOS_SEQ");

            modelBuilder.HasSequence("ESPOL_ALOJAMIENTO_SEQ").IsCyclic();

            modelBuilder.HasSequence("ESPOL_ARCHIVOS_SEQ");

            modelBuilder.HasSequence("ESPOL_AUDITORIA_INGRESO_SEQ");

            modelBuilder.HasSequence("ESPOL_MATRICULAS_SEQ").IsCyclic();

            modelBuilder.HasSequence("ESPOL_PARQUEADERO_SEQ");

            modelBuilder.HasSequence("ESPOL_USUARIOS_SEQ");

            modelBuilder.HasSequence("EXP_ABOGADO_SEQ");

            modelBuilder.HasSequence("EXP_ACTUACIONES_NOTICIA_SEQ");

            modelBuilder.HasSequence("EXP_ACUMULADO_SEQ");

            modelBuilder.HasSequence("EXP_ALEG_CONCLUSION_SEQ");

            modelBuilder.HasSequence("EXP_ARCHIVO_SEQ");

            modelBuilder.HasSequence("EXP_AUDIENCIA_SEQ");

            modelBuilder.HasSequence("EXP_AVOCANDO_SEQ");

            modelBuilder.HasSequence("EXP_CIERRE_FORMAL_SEQ");

            modelBuilder.HasSequence("EXP_CITA_PROCURADURIA_SEQ");

            modelBuilder.HasSequence("EXP_CITACION_SEQ");

            modelBuilder.HasSequence("EXP_COMU_GENERAL_SEQ");

            modelBuilder.HasSequence("EXP_COMU_INHIBITORIO_SEQ");

            modelBuilder.HasSequence("EXP_CONST_EJECUT_SEQ");

            modelBuilder.HasSequence("EXP_CONST_ENT_COPIA_SEQ");

            modelBuilder.HasSequence("EXP_CONST_SECRE_SEQ");

            modelBuilder.HasSequence("EXP_CTRL_AUDITORIA_COGECOP_SEQ");

            modelBuilder.HasSequence("EXP_CTRL_AUDITORIA_PROC_SEQ");

            modelBuilder.HasSequence("EXP_CTRL_AUDITORIA_SESION_SEQ");

            modelBuilder.HasSequence("EXP_CTRL_USUARIOS_SEQ");

            modelBuilder.HasSequence("EXP_DECLARACION_SEQ");

            modelBuilder.HasSequence("EXP_DECRETANDO_PRUEBAS_SEQ");

            modelBuilder.HasSequence("EXP_DESP_COMISORIO_SEQ");

            modelBuilder.HasSequence("EXP_DOCUMENTOS_SEQ");

            modelBuilder.HasSequence("EXP_ETAPAS_NOTICIA_SEQ");

            modelBuilder.HasSequence("EXP_FALLO_INVES_SEQ");

            modelBuilder.HasSequence("EXP_FALLO_PRI_SEQ");

            modelBuilder.HasSequence("EXP_FALLO_SEG_SEQ");

            modelBuilder.HasSequence("EXP_FALTAS_INVEST_SEQ");

            modelBuilder.HasSequence("EXP_FALTAS_INVESTPLIEGO_SEQ");

            modelBuilder.HasSequence("EXP_FORMAL_SEQ");

            modelBuilder.HasSequence("EXP_INHIBITORIO_SEQ");

            modelBuilder.HasSequence("EXP_INST_AUDIENCIA_SEQ");

            modelBuilder.HasSequence("EXP_INV_VINCULANDO_SEQ");

            modelBuilder.HasSequence("EXP_INVES_DILIG_SEQ");

            modelBuilder.HasSequence("EXP_INVESTIGADO_SEQ");

            modelBuilder.HasSequence("EXP_NO_PRESENTACION_SEQ");

            modelBuilder.HasSequence("EXP_NOTI_ACUMULADA_SEQ");

            modelBuilder.HasSequence("EXP_NOTI_EDICTO_SEQ");

            modelBuilder.HasSequence("EXP_NOTI_ESTADO_SEQ");

            modelBuilder.HasSequence("EXP_NOTI_GENERAL_SEQ");

            modelBuilder.HasSequence("EXP_NOTI_PENDIENTES_SEQ");

            modelBuilder.HasSequence("EXP_NOTI_SUPER_PROC_SEQ");

            modelBuilder.HasSequence("EXP_NOTICIA_DISCI_SEQ");

            modelBuilder.HasSequence("EXP_NOTIFICACION_SEQ");

            modelBuilder.HasSequence("EXP_NUL_INVEST_SEQ");

            modelBuilder.HasSequence("EXP_NULIDAD_SEQ");

            modelBuilder.HasSequence("EXP_PLIEGO_CARGO_SEQ");

            modelBuilder.HasSequence("EXP_PPREFERENTE_SEQ");

            modelBuilder.HasSequence("EXP_PRELIMINAR_SEQ");

            modelBuilder.HasSequence("EXP_PRUE_DOCUMENTAL_SEQ");

            modelBuilder.HasSequence("EXP_QUEJOSO_SEQ");

            modelBuilder.HasSequence("EXP_REAN_AUDIENCIA_SEQ");

            modelBuilder.HasSequence("EXP_RECHAZA_QUEJA_SEQ");

            modelBuilder.HasSequence("EXP_RECHAZA_RECURSO_SEQ");

            modelBuilder.HasSequence("EXP_REMIT_COMPET_SEQ");

            modelBuilder.HasSequence("EXP_REPARTO_INVEST_SEQ");

            modelBuilder.HasSequence("EXP_RESU_COPIAS_SEQ");

            modelBuilder.HasSequence("EXP_RESU_PRUEBAS_SEQ");

            modelBuilder.HasSequence("EXP_RESU_REPOSICION_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_ALEGATO_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_APELAR_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_COPIAS_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_DECLARAR_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_DESCARGO_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_IMPEDIMENTO_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_NULIDAD_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_PPREFERENTE_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_PRUE_DOCUM_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_PRUEBAS_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_QUEJA_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_RECUSACION_SEQ");

            modelBuilder.HasSequence("EXP_SOLI_REPOSICION_SEQ");

            modelBuilder.HasSequence("EXP_SOLICITUDPERICIAL_SEQ");

            modelBuilder.HasSequence("EXP_SUPER_ADMINISTRATIVA_SEQ");

            modelBuilder.HasSequence("EXP_USUARIOS_PERFILES_SEQ");

            modelBuilder.HasSequence("EXP_VERSIONLIBRE_SEQ");

            modelBuilder.HasSequence("EXP_VINCULANDO_SEQ");

            modelBuilder.HasSequence("EXP_VISITAESPECIAL_SEQ");

            modelBuilder.HasSequence("EXP_VISITAPPREFERENTE_SEQ");

            modelBuilder.HasSequence("FR_0008_APRUEBA_SEQ");

            modelBuilder.HasSequence("FR_0008_SEQ");

            modelBuilder.HasSequence("FR_0014_SEQ");

            modelBuilder.HasSequence("FR_0017_SEQ");

            modelBuilder.HasSequence("ID");

            modelBuilder.HasSequence("IMAGENES_SEQ");

            modelBuilder.HasSequence("INSCRIP_NEX_FUNCI_SEQ");

            modelBuilder.HasSequence("INSCRIPCION_NEX_SEQ");

            modelBuilder.HasSequence("ISEQ$$_1091183");

            modelBuilder.HasSequence("ISEQ$$_1712");

            modelBuilder.HasSequence("ISEQ$$_198598");

            modelBuilder.HasSequence("ISEQ$$_198599");

            modelBuilder.HasSequence("MLT_ASP_GEOGRAFICOS_SEQ");

            modelBuilder.HasSequence("MLT_CTRL_USUARIOS_SEQ");

            modelBuilder.HasSequence("MLT_ESTABLECIMINETOS_SEQ");

            modelBuilder.HasSequence("MLT_POBLACION_SEQ");

            modelBuilder.HasSequence("MLT_POL_ADMI_SEQ");

            modelBuilder.HasSequence("MLT_UNIDAD_SEQ");

            modelBuilder.HasSequence("MODALIDAD_SEQ");

            modelBuilder.HasSequence("MTL_PER_EXTERNO_SEQ");

            modelBuilder.HasSequence("NOTICIAS_SEQ");

            modelBuilder.HasSequence("NOTIFICACIONES_SEQ");

            modelBuilder.HasSequence("OPCIONES_RESP_DIA_SEQ");

            modelBuilder.HasSequence("OUT_IMPRESION_SEQ");

            modelBuilder.HasSequence("OUT_IMPRESORA_SEQ");

            modelBuilder.HasSequence("PORTAL_AUDITORIA_SEQ");

            modelBuilder.HasSequence("PORTAL_CONTRATOS_SEQ");

            modelBuilder.HasSequence("PORTAL_DESTINATARIOS_SEQ");

            modelBuilder.HasSequence("PORTAL_INTENCIONES_SEQ");

            modelBuilder.HasSequence("PORTAL_PAZ_SALVO_MOV_SEQ");

            modelBuilder.HasSequence("PORTAL_PROTOCOLO_SEQ");

            modelBuilder.HasSequence("PORTAL_SOL_PAZ_SALVO_SEQ");

            modelBuilder.HasSequence("PREGUNTA_DIA_SEQ");

            modelBuilder.HasSequence("PRUEBA_ESTUDIANTE_SEQ");

            modelBuilder.HasSequence("PRUEBA_SEQ");

            modelBuilder.HasSequence("RADIO_ENSAMBLAJE_SEQ");

            modelBuilder.HasSequence("RADIOS_CONCEPTO_TECNICO_SEQ");

            modelBuilder.HasSequence("RADIOS_CONTROL_ENSAMBLADOS_SEQ");

            modelBuilder.HasSequence("RADIOS_DEFECTUOSOS_SEQ");

            modelBuilder.HasSequence("S_AUD_APP_AUD_DETALLE");

            modelBuilder.HasSequence("S_AUD_APP_AUDITORIA");

            modelBuilder.HasSequence("S_CONFIG_DATA");

            modelBuilder.HasSequence("S_ESP__ACTAS_SEQ");

            modelBuilder.HasSequence("S_HT_USER_SESSIONS");

            modelBuilder.HasSequence("S_SKILLLIFETIME");

            modelBuilder.HasSequence("SALA_SEQ");

            modelBuilder.HasSequence("SEGURO_VOL_BE_CONYUGE_SEQ");

            modelBuilder.HasSequence("SEGURO_VOLUNTARIO_BENE_SEQ");

            modelBuilder.HasSequence("SEGURO_VOLUNTARIO_EMPL_SEQ");

            modelBuilder.HasSequence("SGI_AUDITORIA_SEQ");

            modelBuilder.HasSequence("SGI_PERIODOS_SEQ");

            modelBuilder.HasSequence("SGI_SPNC_SEQ");

            modelBuilder.HasSequence("SIAP_INFO_PRESTA_SEQ");

            modelBuilder.HasSequence("SLIDER_SEQ");

            modelBuilder.HasSequence("SQ_SIPRECADNETCLAIMS");

            modelBuilder.HasSequence("SQ_SPNC_USUARIOCLAIM");

            modelBuilder.HasSequence("SQ_USUARIOCLAIM");

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

    }
}
