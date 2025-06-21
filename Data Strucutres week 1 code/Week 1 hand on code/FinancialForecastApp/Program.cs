using System;
using System.Collections.Generic;

public class MyMoneyPredictor
{
    public static double FigureOutFutureMoney(double moneyNow, double yearlyGrowth, int yearsAhead)
    {
        if (yearsAhead <= 0)
        {
            return moneyNow;
        }
        else
        {
            double moneyLastYear = FigureOutFutureMoney(moneyNow, yearlyGrowth, yearsAhead - 1);
            return moneyLastYear * (1 + yearlyGrowth);
        }
    }

    private static Dictionary<int, double> whatWeCalculatedBefore = new Dictionary<int, double>();

    public static double FigureOutFutureMoneySmartly(double moneyNow, double yearlyGrowth, int yearsAhead)
    {
        if (yearsAhead <= 0)
        {
            return moneyNow;
        }

        if (whatWeCalculatedBefore.ContainsKey(yearsAhead))
        {
            Console.WriteLine($"  [Smart Check] Found the answer for year {yearsAhead} already!");
            return whatWeCalculatedBefore[yearsAhead];
        }

        Console.WriteLine($"  [Calculation] Figuring out money for year {yearsAhead}...");
        double moneyLastYear = FigureOutFutureMoneySmartly(moneyNow, yearlyGrowth, yearsAhead - 1);
        double currentMoney = moneyLastYear * (1 + yearlyGrowth);

        whatWeCalculatedBefore[yearsAhead] = currentMoney;
        return currentMoney;
    }

    public static void Main(string[] args)
    {
        double startingCash = 10000;
        double yearlyIncrease = 0.07;
        int howManyYears = 10;

        Console.WriteLine("--- Let's Predict Your Money! ---");
        Console.WriteLine($"You start with: {startingCash:C}");
        Console.WriteLine($"It grows by: {yearlyIncrease:P} each year");
        Console.WriteLine($"We're looking: {howManyYears} years into the future\n");

        Console.WriteLine("Using the Simple Way (Year by Year):");
        double futureMoneySimple = FigureOutFutureMoney(startingCash, yearlyIncrease, howManyYears);
        Console.WriteLine($"Your money after {howManyYears} years (Simple): {futureMoneySimple:C}\n");

        Console.WriteLine("Using the Smart Way (Remembering What We've Done):");
        whatWeCalculatedBefore.Clear();
        double futureMoneySmart = FigureOutFutureMoneySmartly(startingCash, yearlyIncrease, howManyYears);
        Console.WriteLine($"\nYour money after {howManyYears} years (Smart): {futureMoneySmart:C}\n");

        Console.WriteLine("--- A Little Chat About How We Did It ---");
        Console.WriteLine("The 'Simple Way' works by going back one year at a time until it hits today.");
        Console.WriteLine("The 'Smart Way' does the same, but it keeps a little notebook.");
        Console.WriteLine("If it needs to know your money for a year it's already figured out, it just checks its notebook instead of doing the math again!");
        Console.WriteLine("This makes it quicker if we were asking it to calculate overlapping future amounts many times.");

        Console.WriteLine("\nPress any key to finish.");
        Console.ReadKey();
    }
}