var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddSpaStaticFiles(c => { c.RootPath = "wwwroot"; });

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSpaStaticFiles();
app.UseSpa(spa =>
{
    spa.Options.SourcePath = "wwwroot";
});
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
