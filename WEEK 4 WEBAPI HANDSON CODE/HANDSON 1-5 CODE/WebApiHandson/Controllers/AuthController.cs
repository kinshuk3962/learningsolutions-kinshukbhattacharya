using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("[controller]")]
[AllowAnonymous] // 👈 Allows public access to this controller
public class AuthController : ControllerBase
{
    [HttpGet("GetToken")]
    public IActionResult GetToken()
    {
        string token = GenerateJSONWebToken(1, "Admin"); // You can change role to "POC", "User", etc.
        return Ok(token);
    }

    private string GenerateJSONWebToken(int userId, string userRole)
    {
        // ✅ Use same long security key as Program.cs
        var securityKey = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes("mysuperdupersecretkeymysuperdupersecretkey")); // 32+ characters

        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.Role, userRole),
            new Claim("UserId", userId.ToString())
        };

        var token = new JwtSecurityToken(
            issuer: "mySystem",
            audience: "myUsers",
            claims: claims,
            expires: DateTime.Now.AddMinutes(2),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}