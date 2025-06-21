using System;
using System.Collections.Generic;

public static class SearchAlgorithms
{
    // Linear Search by Product Name
    public static Product? LinearSearch(List<Product> products, string name)
    {
        foreach (var product in products)
        {
            if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
            {
                return product;
            }
        }
        return null;
    }

    // Binary Search by Product ID
    public static Product? BinarySearch(List<Product> sortedProducts, int id)
    {
        int low = 0;
        int high = sortedProducts.Count - 1;

        while (low <= high)
        {
            int mid = (low + high) / 2;
            if (sortedProducts[mid].ProductId == id)
                return sortedProducts[mid];
            else if (sortedProducts[mid].ProductId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return null;
    }
}
