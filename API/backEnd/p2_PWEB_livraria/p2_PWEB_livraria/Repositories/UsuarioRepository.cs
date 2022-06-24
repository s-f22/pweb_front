
using p2_PWEB_livraria.Contexts;
using p2_PWEB_livraria.Domains;
using p2_PWEB_livraria.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using System.Threading.Tasks;

namespace p2_PWEB_livraria.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {

        P2_PWEB_Livraria metodos = new P2_PWEB_Livraria();
        private static int randomCode;

        public Usuario BuscarPorId(int idUsuario)
        {
            return metodos.Usuarios.FirstOrDefault(u => u.IdUsuario == idUsuario);
        }


        public void Cadastrar(Usuario novoUsuario)
        {
            metodos.Usuarios.Add(novoUsuario);
            metodos.SaveChanges();
        }


        public Usuario ValidarEmailSenha(string email, string senha)
        {
            return metodos.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }


        public void EnviaEmailRecSenha(string email)
        {
            Random rand = new Random();
            int code = rand.Next(99999);

            Usuario user = metodos.Usuarios.FirstOrDefault(u => u.Email == email);

            if (user != null)
            {
                MimeMessage message = new MimeMessage();
                message.From.Add(new MailboxAddress("P2_Pweb_FATEC", "emailqualquerdeteste@email.com"));
                message.To.Add(MailboxAddress.Parse(user.Email));
                message.Subject = "Teste email";
                message.Body = new TextPart("plain")
                {
                    Text = @"Seu código de recuperação de senha é: " + code
                };

                SmtpClient client = new SmtpClient();

                try
                {
                    client.Connect("smtp.gmail.com", 465, true);
                    client.Authenticate("senairhteste@gmail.com", "SesiSenai@132");
                    client.Send(message);
                }
                catch (Exception)
                {

                    throw;
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                    randomCode = code;
                }
            }
        }
    }
}
