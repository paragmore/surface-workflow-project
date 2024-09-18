import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const tags = await prisma.tag.findMany();
  return NextResponse.json({ tags });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { userName: string };

  const { userName } = body;

  const tag = await prisma.tag.create({
    data: {
      userName,
    },
  });

  return NextResponse.json({ tag });
}
