using Confluent.Kafka;

class KafkaPublisher
{
    static async Task Main()
    {
        var config = new ProducerConfig { BootstrapServers = "localhost:9092" };
        using var producer = new ProducerBuilder<Null, string>(config).Build();

        Console.WriteLine("Type messages to send (type 'exit' to quit):");

        while (true)
        {
            var input = Console.ReadLine();
            if (input?.ToLower() == "exit") break;

            await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = input });
            Console.WriteLine("Message sent!");
        }
    }
}