using System.ComponentModel.DataAnnotations;

namespace Comun.Dto.DtoApiSeguridad
{
    /// <summary>
    /// clase para validar credenciales del logueo
    /// </summary>
    public class CredencialesDto
    {
        private string _username = string.Empty;

        [Required, Display(Name = "Usuario empresarial")]
        [StringLength(30, ErrorMessage = "El {0} debe tener entre 5 y 30 caracteres.", MinimumLength = 5)]
        public string UsuarioEmpresarial { get => _username; set { _username = value.Trim().ToLower(); } }


        [Required, Display(Name = "Contraseña")]
        [StringLength(50, ErrorMessage = "La {0} debe tener entre 8 y 50 caracteres.", MinimumLength = 8)]
        [DataType(DataType.Password)]
        public string ClaveEmpresarial { get; set; } = string.Empty;
    }
}
