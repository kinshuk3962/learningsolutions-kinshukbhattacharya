using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using WebApiHandson.Models;
using WebApiHandson.Filters;

namespace WebApiHandson.Controllers;

[ApiController]
[Route("[controller]")]
[Authorize(Roles = "Admin,POC")] // ✅ Role-based access using JWT
[ServiceFilter(typeof(CustomExceptionFilter))] // Optional: Keep exception logging
public class EmployeeController : ControllerBase
{
    // 🔹 Static list of employees
    private static List<Employee> _employees = new()
    {
        new Employee
        {
            Id = 1,
            Name = "John Doe",
            Salary = 60000,
            Permanent = true,
            Department = new Department { Id = 101, Name = "HR" },
            Skills = new List<Skill> { new Skill { Id = 1, Name = "Communication" } },
            DateOfBirth = new DateTime(1990, 5, 24)
        }
    };

    //  AllowAnonymous for public GET (testing optional)
    [HttpGet("GetStandard")]
    [AllowAnonymous]
    [ProducesResponseType(typeof(List<Employee>), 200)]
    [ProducesResponseType(500)]
    public ActionResult<List<Employee>> GetStandard()
    {
        // throw new Exception("Test Exception Logging"); // Uncomment to test custom logging
        return Ok(_employees);
    }

    //  POST - Add new employee (requires valid JWT token with proper role)
    [HttpPost("Add")]
    [ProducesResponseType(200)]
    [ProducesResponseType(401)]
    public IActionResult Add([FromBody] Employee emp)
    {
        _employees.Add(emp);
        return Ok(_employees);
    }

    //  PUT - Update employee details
    [HttpPut("Update")]
    [ProducesResponseType(typeof(Employee), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(401)]
    public ActionResult<Employee> Update([FromBody] Employee update)
    {
        // Step 1: Validate ID
        if (update.Id <= 0)
            return BadRequest("Invalid employee id");

        // Step 2: Locate existing employee
        var existing = _employees.FirstOrDefault(e => e.Id == update.Id);
        if (existing == null)
            return BadRequest("Invalid employee id");

        // Step 3: Update fields
        existing.Name = update.Name;
        existing.Salary = update.Salary;
        existing.Permanent = update.Permanent;
        existing.DateOfBirth = update.DateOfBirth;
        existing.Department = update.Department;
        existing.Skills = update.Skills;

        return Ok(existing);
    }
}