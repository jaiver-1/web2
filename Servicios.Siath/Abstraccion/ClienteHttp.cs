using Comun.Dto;
using Servicios.Siath.Contratos.Http;
using System.Net.Http;
using System.Text;
using System.Text.Json;

namespace Servicios.Siath.Abstraccion
{
    public class ClienteHttp : IHttpCliente
    {
        private readonly HttpClient _httpClient;

        public ClienteHttp()
        {
            _httpClient = new HttpClient();
        }

        public async Task<RespuestaDto<TResult>> HttpGet<TResult>(string _param, string _token)
        {
            _httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Bearer " + _token);

            var request = await _httpClient.GetAsync(_param);

            var Resp = await request.Content.ReadAsStringAsync();

            var contenido = JsonSerializer.Deserialize<RespuestaDto<TResult>>(await request.Content.ReadAsStringAsync(),
                 new JsonSerializerOptions
                 {
                     PropertyNameCaseInsensitive = true
                 });

            return contenido!;

        }

        public async Task<RespuestaDto<TResult>> HttpPost<TParam, TResult>(TParam _param, string _url, string _token)
        {
            _httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Bearer " + _token);

            var content = new StringContent(
                            JsonSerializer.Serialize(_param),
                            Encoding.UTF8,
                            "application/json"
                        );

            var request = await _httpClient.PostAsync(_url, content);

            var contenido = JsonSerializer.Deserialize<RespuestaDto<TResult>>(
                await request.Content.ReadAsStringAsync(),
                new JsonSerializerOptions
                {
                    //no distingue entre mayúsculas y minúsculas durante la deserialización
                    PropertyNameCaseInsensitive = true
                });

            return contenido!;
        }

        public async Task<RespuestaDto<TResult>> HttpPost<TParam, TResult>(TParam _param, string _url)
        {
            var content = new StringContent(
                            JsonSerializer.Serialize(_param),
                            Encoding.UTF8,
                            "application/json"
                        );
            var request = await _httpClient.PostAsync(_url, content);

            var contenido = JsonSerializer.Deserialize<RespuestaDto<TResult>>(
                await request.Content.ReadAsStringAsync(),
                new JsonSerializerOptions
                {
                    //no distingue entre mayúsculas y minúsculas durante la deserialización
                    PropertyNameCaseInsensitive = true
                });
            return contenido!;
        }
        public async Task<RespuestaDto<TResult>> HttpPut<TParam, TResult>(TParam _param, string _url, string _token)
        {
            _httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Bearer " + _token);

            var content = new StringContent(
                            JsonSerializer.Serialize(_param),
                            Encoding.UTF8,
                            "application/json"
                        );

            var request = await _httpClient.PutAsync(_url, content);

            var contenido = JsonSerializer.Deserialize<RespuestaDto<TResult>>(
                await request.Content.ReadAsStringAsync(),
                new JsonSerializerOptions
                {
                    //no distingue entre mayúsculas y minúsculas durante la deserialización
                    PropertyNameCaseInsensitive = true
                });

            return contenido!;
        }


        public async Task<RespuestaDto<TResult>> HttpDelete<TResult>(string _param, string _token)
        {
            _httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", "Bearer " + _token);

            var request = await _httpClient.DeleteAsync(_param);

            var Resp = await request.Content.ReadAsStringAsync();

            var contenido = JsonSerializer.Deserialize<RespuestaDto<TResult>>(await request.Content.ReadAsStringAsync(),
                 new JsonSerializerOptions
                 {
                     PropertyNameCaseInsensitive = true
                 });

            return contenido!;

        }

    }
}
