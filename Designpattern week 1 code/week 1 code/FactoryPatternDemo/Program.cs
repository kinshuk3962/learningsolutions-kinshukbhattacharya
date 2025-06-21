using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Which document do you want to create? (word/pdf): ");
        string choice = (Console.ReadLine() ?? "").ToLower();


        DocumentFactory? factory = choice switch
        {
            "word" => new WordFactory(),
            "pdf" => new PdfFactory(),
            _ => null
        };

        if (factory == null)
        {
            Console.WriteLine("Unknown document type ❌");
            return;
        }

        IDocument doc = factory.CreateDocument();
        doc.Open();
    }
}
