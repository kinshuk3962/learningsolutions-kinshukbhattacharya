using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<Product> products = new()
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Book", "Education"),
            new Product(105, "Tablet", "Electronics")
        };

        Console.WriteLine("🔍 LINEAR SEARCH by product name:");
        Console.Write("Enter product name to search: ");
        string nameToSearch = Console.ReadLine() ?? "";
        var result1 = SearchAlgorithms.LinearSearch(products, nameToSearch);
        Console.WriteLine(result1 != null ? $"✅ Found: {result1}" : "❌ Product not found.");

        Console.WriteLine("\n📚 BINARY SEARCH by product ID:");
        products.Sort((a, b) => a.ProductId.CompareTo(b.ProductId)); // Sort for binary search
        Console.Write("Enter product ID to search: ");
        string? idInput = Console.ReadLine();
        if (int.TryParse(idInput, out int idToSearch))
        {
            var result2 = SearchAlgorithms.BinarySearch(products, idToSearch);
            Console.WriteLine(result2 != null ? $"✅ Found: {result2}" : "❌ Product not found.");
        }
        else
        {
            Console.WriteLine("❌ Invalid ID");
        }
    }
}
