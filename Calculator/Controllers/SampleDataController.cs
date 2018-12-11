using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Calculator.Controllers
{
    [Route("/calculator")]
    public class CalculatorController : Controller
    {

        [HttpPost("[action]")]
        public string Calculate([FromBody] Expression expression)
        {
            return Eval(expression.expression).ToString();
        }

        static Double Eval(String expression)
        {
            DataTable tempsource = new DataTable();
            return Convert.ToDouble(tempsource.Compute(expression, string.Empty));
        }
    }

    public class Expression
    {
        public string expression { get; set; }
    }
}
