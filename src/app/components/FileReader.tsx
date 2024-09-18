import { promises as fs } from "fs";
import path from "path";

export default async function FileReader({
  component,
}: {
  component: ({ code }: { code: string }) => JSX.Element;
}) {
  const filePath = path.join(process.cwd(), "/surface_analytics.js");
  const fileContent = await fs.readFile(filePath, "utf-8");

  const Component = component;

  return <Component code={fileContent} />;
}
