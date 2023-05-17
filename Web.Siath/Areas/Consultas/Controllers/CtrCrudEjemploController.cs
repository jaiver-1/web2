using Comun.Areas.Consultas;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Web.Siath.Areas.Consultas.Controllers
{
    [Area("Consultas")]
    [Authorize(Roles = "1,2")]
    public class CtrCrudEjemploController : Controller
    {
        

       
    }
}
