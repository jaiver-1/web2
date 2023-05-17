using Comun.Dto.DtoApiSeguridad;
using Comun.Dto;

namespace Servicios.Siath.Contratos.Api.Seguridad
{
    public interface IApiWebOud
    {
        Task<RespuestaDto<bool>> ObtenerOudSeviciosAsync(CredencialesDto _credenciales, string token);
    }
}
