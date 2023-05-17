using System.Text.Json.Serialization;

namespace Comun.Admin
{
    [Serializable]
    public class SliderDto
    {
        [JsonPropertyName("orden")]
        public decimal ORDEN { get; set; }
        public string CONSECUTIVO { get; set; }
        [JsonPropertyName("imagenesconsecutivas")]
        public string IMAGENES_CONSECUTIVO { get; set; }
        public string URL { get; set; }
        public string FILENAME { get; set; }
        public string URL_LINK { get; set; }
        public string RUTA { get; set; }
    }
}
