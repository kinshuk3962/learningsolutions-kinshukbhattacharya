using NUnit.Framework;
using CalcLibrary;

namespace CalculatorTests
{
    [TestFixture]
    public class CalculatorTests
    {
        Calculator calc;

        [SetUp]
        public void Setup()
        {
            calc = new Calculator();
        }

        [TearDown]
        public void Cleanup()
        {
            calc = null;
        }

        [Test]
        [TestCase(2, 3, 5)]
        [TestCase(10, 5, 15)]
        [TestCase(-1, -1, -2)]
        public void Add_WhenCalled_ReturnsSum(int a, int b, int expected)
        {
            var result = calc.Add(a, b);
            Assert.That(result, Is.EqualTo(expected));
        }
    }
}
