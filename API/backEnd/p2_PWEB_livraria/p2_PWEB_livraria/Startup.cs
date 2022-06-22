﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace p2_PWEB_livraria
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        // NEWTONSOFT, SWAGGER E JWTBEARER
        {
            //Adiciona o CORS ao projeto
            services.AddCors(options => {
                //para add uma politica de controle.
                options.AddPolicy("CorsPolicy",
                   builder =>
                   {
                       builder.WithOrigins("*")
                                             .AllowAnyHeader() //qualquer cabecalho
                                    .AllowAnyMethod(); //vamos utilizar no post.(json)
                   });

            });

            services
                .AddControllers()
                .AddNewtonsoftJson(options => {
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                });

            // Adiciona o servi�o do Swagger
            // https://docs.microsoft.com/pt-br/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-5.0&tabs=visual-studio

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Version = "v1", Title = "p2_PWEB_Livraria.webAPI" });

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = "JwtBearer";
                    options.DefaultChallengeScheme = "JwtBearer";
                })

                .AddJwtBearer("JwtBearer", options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("p2_PWEB_Livraria-chave-autenticacao")),
                        ClockSkew = TimeSpan.FromMinutes(15),
                        ValidIssuer = "p2_PWEB_Livraria.webAPI",
                        ValidAudience = "p2_PWEB_Livraria.webAPI"

                    };
                });
        }
        // NEWTONSOFT, SWAGGER E JWTBEARER

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // SWAGGER
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "p2_PWEB_Livraria.webAPI");
                c.RoutePrefix = string.Empty;
            });
            // SWAGGER

            app.UseCors("CorsPolicy");

            app.UseRouting();

            // JWT BEARER
            app.UseAuthentication();
            app.UseAuthorization();
            // JWT BEARER

            // MAP CONTROLLERS
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            // MAP CONTROLLERS
        }
    }
}
