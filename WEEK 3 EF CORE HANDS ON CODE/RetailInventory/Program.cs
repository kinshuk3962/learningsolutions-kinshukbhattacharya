using System;
using System.Linq;
using RetailInventory.Models;

namespace RetailInventory
{
    class Program
    {
        static void Main(string[] args)
        {
            using var context = new AppDbContext();

            Console.WriteLine(" Updating product price...");

            // 🔧 Update: Change price of "Smartphone"
            var phone = context.Products.FirstOrDefault(p => p.Name == "Smartphone");
            if (phone != null)
            {
                phone.Price = 749.99M;
                context.SaveChanges();
                Console.WriteLine($" Updated '{phone.Name}' price to ${phone.Price}");
            }

            //  Delete: Remove "LED TV"
            Console.WriteLine("🗑️ Deleting product...");
            var tv = context.Products.FirstOrDefault(p => p.Name == "LED TV");
            if (tv != null)
            {
                context.Products.Remove(tv);
                context.SaveChanges();
                Console.WriteLine($" Deleted '{tv.Name}' from inventory.");
            }

            // 📦 Display updated product list
            var products = context.Products
                                  .Select(p => new
                                  {
                                      p.Name,
                                      p.Price,
                                      Category = p.Category.Name
                                  })
                                  .ToList();

            Console.WriteLine("\n Updated Products in Inventory:");
            foreach (var p in products)
            {
                Console.WriteLine($"- {p.Name} (${p.Price}) — Category: {p.Category}");
            }
        }
    }
}