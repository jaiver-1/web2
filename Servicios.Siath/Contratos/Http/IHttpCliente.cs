using Comun.Dto;

namespace Servicios.Siath.Contratos.Http
{
    public interface IHttpCliente
    {
        Task<RespuestaDto<TResult>> HttpPost<TParam, TResult>(TParam _param, string _url,string _token);
        Task<RespuestaDto<TResult>> HttpPost<TParam, TResult>(TParam _param, string _url);
        Task<RespuestaDto<TResult>> HttpGet<TResult>(string _param, string _token);
        Task<RespuestaDto<TResult>> HttpDelete<TResult>(string _param, string _token);
        Task<RespuestaDto<TResult>> HttpPut<TParam, TResult>(TParam _param, string _url, string _token);
    }
}
