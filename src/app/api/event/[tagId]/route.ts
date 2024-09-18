import { NextResponse } from "next/server";

import { db as prisma } from "~/server/db";

export async function GET(
  request: Request,
  { params }: { params: { tagId: string } },
) {
  const { tagId } = params;
  const event = await prisma.event.findFirst({ where: { tagId } });
  return NextResponse.json({ event });
}
