using Comun.Admin;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace Web.Siath.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Authorize(Roles = "1,2")]
    public class CtrUsuariosController : Controller
    {
        public IActionResult Usuarios()
        {
            return View();
        }
    }
}
