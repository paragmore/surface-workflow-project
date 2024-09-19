import { NextResponse } from "next/server";

import { db as prisma } from "~/server/db";

export async function GET(
  _req: Request,
  { params }: { params: { userName: string } },
) {
  const { userName } = params;
  if (!userName) {
    return NextResponse.json(
      { error: "userName is required" },
      { status: 400 },
    );
  }
  try {
    const tag = await prisma.tag.findFirst({ where: { userName } });
    return NextResponse.json({ tag });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
