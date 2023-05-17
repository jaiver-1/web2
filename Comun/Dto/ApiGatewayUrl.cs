namespace Comun.Dto
{
    /// <summary>
    /// clase para poblar con la url del Api.Gateway.Ocelot
    /// </summary>
    public class ApiGatewayUrl
    {
        public ApiGatewayUrl(string url)
        {
            
            Url = url;
            Token = $"{url}api/Token";
            UsuarioOud = $"{url}api/UsuarioOud";
            Consultalogin = $"{url}api/consultalogin";
            GetMenu = $"{url}api/consultamenu";
            GetEmpleados = $"{url}api/GetEmpleados";
            PostEmpleados = $"{url}api/PostEmpleados";
            PutEmpleado = $"{url}api/PutEmpleado";
            DeleteEmpleados = $"{url}api/DeleteEmpleados";
        }

        public readonly string Url;
        public readonly string Token;
        public readonly string UsuarioOud;
        public readonly string Consultalogin;
        public readonly string GetMenu;

        //Url del Sistema
        public readonly string GetEmpleados;
        public readonly string PostEmpleados;
        public readonly string PutEmpleado;
        public readonly string DeleteEmpleados;
       

    }
}