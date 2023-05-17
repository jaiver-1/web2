using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Datos.Siath.Models
{
    public class Apiusuario
    {
        public decimal IdUsuario { get; set; }
        public decimal IdTipoUsuario { get; set; }
        public decimal IdCargo { get; set; }
        public decimal EmplUndeConsecutivo { get; set; }
        public decimal EmplUndeFuerza { get; set; }
        public decimal EmplConsecutivo { get; set; }
        public decimal Identificacion { get; set; }
        public string UsuarioEmpresarial { get; set; } = null!;
        public string UsuarioCreacion { get; set; } = null!;
        public DateTime FechaCreacion { get; set; }
        public string MaquinaCreacion { get; set; } = null!;
        public bool Vigente { get; set; }
    }
}
