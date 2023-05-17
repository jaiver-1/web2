using Comun.Dto;
using System.Text.Json;


namespace Web.Siath
{
    public static class SessionExtensionss
    {        
        public static void SetObject(this ISession session, string key, object value)
        {
            session.SetString(key, JsonSerializer.Serialize(value));
        }

        public static T GetObject<T>(this ISession session, string key)
        {
            try
            {
                var value = session.GetString(key);
                var values = JsonSerializer.Deserialize<RespuestaDto<T>>(value);
                return values == null ? default(T) : values.Respuesta;
            }
            catch 
            {
                return default(T);
            }
        }
    }
}
