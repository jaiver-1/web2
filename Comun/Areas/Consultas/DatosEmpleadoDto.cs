using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Comun.Areas.Consultas
{
    public class DatosEmpleadoDto
    {
        #region Propiedades
        [JsonPropertyName("IdTablaEmpleado")]
        public int IDTABLAEMPLEADO { get; set; }
        [JsonPropertyName("nombres")]
        public string NOMBRES { get; set; }
        [JsonPropertyName("apellidos")]
        public string APELLIDOS { get; set; }
        [JsonPropertyName("identificacion")]
        public Int64 IDENTIFICACION { get; set; }
        [JsonPropertyName("email")]
        public string EMAIL { get; set; }
        #endregion

    }
}
