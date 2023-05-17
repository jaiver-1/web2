using Comun.Dto;
using Comun.Dto.DtoApiSeguridad;

namespace Servicios.Siath.Contratos.Api.Seguridad
{
    public interface IApiWebToken
    {
        Task<RespuestaDto<string>> ObtenerTokenSeviciosAsync(usuarioMsDto _usuarioMs);
    }
}
