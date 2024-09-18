import { NextResponse } from "next/server";
import { type Event, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const events = await prisma.event.findMany();
  return NextResponse.json({ events });
}

export async function POST(request: Request) {
  const body = (await request.json()) as Event;

  const { name, visitor, metadata, createdAt, tagId } = body;

  if (!tagId) {
    return NextResponse.json({ error: "tagId is required" }, { status: 400 });
  }

  const existingTag = await prisma.tag.findUnique({
    where: { id: tagId },
  });

  if (!existingTag) {
    return NextResponse.json(
      { error: "Invalid tagId: Tag does not exist" },
      { status: 400 },
    );
  }

  const event = await prisma.event.create({
    data: {
      name,
      visitor,
      metadata,
      createdAt: new Date(createdAt),
      tagId,
    },
  });

  return NextResponse.json({ event });
}
