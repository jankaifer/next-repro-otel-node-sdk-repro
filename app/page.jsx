import { NodeSDK } from "@opentelemetry/sdk-node";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { ConsoleSpanExporter } from "@opentelemetry/sdk-trace-base";

export default function Home() {
  const exporter = new ConsoleSpanExporter();

  const sdk = new NodeSDK({
    spanProcessor: new SimpleSpanProcessor(exporter),
  });
  sdk.start();

  return null;
}
