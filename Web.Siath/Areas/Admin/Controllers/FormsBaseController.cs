using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Web.Siath.Areas.Admin.Controllers
{
    [Area("Admin")]
    //[Authorize(Roles = "1,2")]
    public class FormsBaseController : Controller
    {
        #region Propiedades
        //private readonly IDbAdministracion _IDbAdministracion;
        #endregion

        public FormsBaseController(/*IDbAdministracion iDbAdministracion*/)
        {
            //_IDbAdministracion = iDbAdministracion;
        }
        public IActionResult Formularios()
        {
            var Funcionario = User.FindFirstValue("Funcionario");
            var IpMaquina = HttpContext.Session.GetString("IpMaquina");

            var roles = ((ClaimsIdentity)User.Identity).Claims
                .Where(c => c.Type == ClaimTypes.Role)
                .Select(c => c.Value);

            return View();
        }
        //public JsonResult F_GetDatos(Int64 V_Identificacion)
        //{
        //    List<SliderDto> retorno = _IDbAdministracion.F_GetSilerSuperior();

        //    if (retorno != null)
        //    {
        //        return Json(new { success = true, data = retorno });
        //    }
        //    else
        //    {
        //        return Json(new { success = false, data = retorno });
        //    }
        //}
    }
}
