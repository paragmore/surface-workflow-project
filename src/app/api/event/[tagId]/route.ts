import { NextResponse } from "next/server";
import { type Event, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { tagId: string } },
) {
  const { tagId } = params;
  const events = await prisma.event.findFirst({ where: { tagId } });
  return NextResponse.json({ events });
}
