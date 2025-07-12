
using Confluent.Kafka;

class KafkaConsumer
{
    static void Main()
    {
        var config = new ConsumerConfig
        {
            BootstrapServers = "localhost:9092",
            GroupId = "chat-group",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        using var consumer = new ConsumerBuilder<Null, string>(config).Build();
        consumer.Subscribe("chat-topic");

        Console.WriteLine("Listening for chat messages...");

        while (true)
        {
            var msg = consumer.Consume();
            Console.WriteLine($"Received: {msg.Message.Value}");
        }
    }
}