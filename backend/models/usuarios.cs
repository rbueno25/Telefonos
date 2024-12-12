namespace backend.models
{
    public class Usuario
    {
        public int id_usuario { get; set; }
        public string nombre_usuario { get; set; } = string.Empty;
        public string clave { get; set; } = string.Empty;
        public string correo { get; set; } = string.Empty;
    }
}