using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;

namespace WebApiHandson.Filters;

public class CustomExceptionFilter : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        var details = context.Exception.ToString();
        File.WriteAllText("ExceptionLog.txt", details);

        context.Result = new ObjectResult("Something went wrong. Check the log file.")
        {
            StatusCode = 500
        };
    }
}