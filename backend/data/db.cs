using Microsoft.EntityFrameworkCore;
using backend.models;

namespace backend
{
    public class BD : DbContext
    {
        public BD(DbContextOptions<BD> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuario { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.id_usuario);
            });
        }
    }
}