using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Comun.Admin
{
    public class UsuarioDto
    {
        public Int32 IdUsuario { get; set; }
        public Int32 IdCargo { get; set; }
        public Int32 EmplUndeConsecutivo { get; set; }
        public Int32 EmplUndeFuerza { get; set; }
        public Int32 EmplConsecutivo { get; set; }
        public Int64 Identificacion { get; set; }
        public string Usuario { get; set; }
        public string GradAlfabetico { get; set; }
        public string NombreGrado { get; set; } 
        public string Funcionario { get; set; }
        public string ApellidosNombres { get; set; }
        public string Cargo { get; set; }
        public string Dependencia { get; set; }
        public string Fisica { get; set; }
        public Int32 IdUndeLaborando { get; set; }
        public string Correo { get; set; }
        public int Bloqueado { get; set; }
        public Int64 Celular { get; set; }
        public List<UserRolesDto> UserRolesDto { get; set; }
    }
}
