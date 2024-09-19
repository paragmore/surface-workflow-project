import { headers } from "next/headers";
import { promises as fs } from "fs";
import path from "path";

import { processCodeString } from "~/app/utils/stringUtils";

import { InstallSurfaceTagsContent } from "./InstallSurfaceTagsContent";

const getBaseUrl = () => {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") ?? "http";
  return `${protocol}://${host}`;
};

const readAnalyticsScript = async (filePath: string) => {
  return await fs.readFile(filePath, "utf-8");
};

export default async function InstallTagsReadAnalyticsScript() {
  const baseUrl = getBaseUrl();
  const filePath = path.join(process.cwd(), "/surface_analytics.js");
  const fileContent = await readAnalyticsScript(filePath);
  const code = processCodeString(fileContent, "%{baseUrl}%", baseUrl);

  return <InstallSurfaceTagsContent code={code} />;
}
