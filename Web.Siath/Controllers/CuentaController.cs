using Comun.Dto.DtoApiSeguridad;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Web.Siath.Controllers
{
    public class CuentaController : Controller
    {
      
        private readonly IHttpContextAccessor _httpContextAccessor;
        bool cotiene = false;

        public CuentaController( IHttpContextAccessor httpContextAccessor)
        {
            
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        [AllowAnonymous]
        public IActionResult InicioSesion(string returnurl = null)
        {
            ViewData["ReturnUrl"] = returnurl;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [AllowAnonymous]
        public async Task<IActionResult> InicioSesionAsync(CredencialesDto loginUsuario, string returnurl = null)
        {
            return RedirectToAction(nameof(HomeController.Index), "Home");
        }

        [HttpGet]
        public async Task<IActionResult> CerrarSesion()
        {
            HttpContext.Session.Clear();            
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction(nameof(InicioSesion));
        }
    
    }
}

