using Microsoft.AspNetCore.Mvc;
using System.Linq;
using backend;
using backend.models;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly BD _context;

        public LoginController(BD context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var usuario = _context.Usuario.FirstOrDefault(u => u.nombre_usuario == request.username && u.clave == request.password);
            if (usuario != null)
            {
                return Ok(new { Message = "Inicio de sesión exitoso.", User = usuario });
            }

            return Unauthorized(new { Message = "Credenciales incorrectas." });
        }
    }

    public class LoginRequest
    {
        public string? username { get; set; }
        public string? password { get; set; }
    }
}