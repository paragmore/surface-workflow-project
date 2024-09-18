import { headers } from "next/headers";
import { promises as fs } from "fs";
import path from "path";

import { InstallSurfaceTagsContent } from "./InstallSurfaceTagsContent";
import { processCodeString } from "~/app/utils/stringUtils";

export default async function InstallTagsReadAnalyticsScript() {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${protocol}://${host}`;
  const filePath = path.join(process.cwd(), "/surface_analytics.js");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const code = processCodeString(fileContent, "%{baseUrl}%", baseUrl);

  return <InstallSurfaceTagsContent code={code} />;
}
