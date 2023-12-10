import React from "react";
import { notFound, redirect } from "next/navigation";

import { auth } from "@clerk/nextjs";

import BoardNavbar from "@/app/(platform)/(dashboard)/board/[id]/components/board-navbar";
import { db } from "@/lib/db";
import { AppRoutes } from "@/shared";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { orgId } = auth();
  if (!orgId) {
    return {
      title: "Board",
    };
  }
  const board = await db.board.findUnique({
    where: {
      id: params.id,
      orgId,
    },
  });
  return {
    title: board?.title || "Board",
  };
}

async function BoardIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { orgId } = auth();

  if (!orgId) {
    redirect(AppRoutes.ORGANIZATION_SELECT);
  }

  const board = await db.board.findUnique({
    where: {
      id: params.id,
      orgId,
    },
  });

  if (!board) notFound();

  return (
    <div
      className="relative h-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
    >
      <BoardNavbar data={board} />
      <div className="absolute inset-0 bg-black/10" />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
}

export default BoardIdLayout;
