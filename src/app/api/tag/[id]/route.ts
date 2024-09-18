import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }: { params: { userName: string } }) {
  const { userName } = params;
  try {
    const tag = await prisma.tag.findFirst({ where: { userName } });
    console.log("TAG", tag);
    return NextResponse.json({ tag });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
