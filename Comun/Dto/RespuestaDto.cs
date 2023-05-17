using Comun.Enumeraciones;

namespace Comun.Dto
{
    public class RespuestaDto<T>
    {
        #region Propiedades
        public EstadoOperacion Codigo { get; set; }
        public string Mensaje { get; set; } = string.Empty;
        public bool Estado { get; set; }
        public T Respuesta { get; set; }

        #endregion
    }
}
