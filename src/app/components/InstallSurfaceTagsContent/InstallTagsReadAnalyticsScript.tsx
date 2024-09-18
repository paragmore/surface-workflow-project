import { promises as fs } from "fs";
import path from "path";
import { InstallSurfaceTagsContent } from "./InstallSurfaceTagsContent";

export default async function InstallTagsReadAnalyticsScript() {
  const filePath = path.join(process.cwd(), "/surface_analytics.js");
  const fileContent = await fs.readFile(filePath, "utf-8");

  return <InstallSurfaceTagsContent code={fileContent} />;
}
