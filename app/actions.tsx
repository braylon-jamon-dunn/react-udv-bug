"use server";

import { type ReactNode } from "react";
import { ClientWrapper } from "./client";

async function AsyncChild({
  children,
}: {
  children: ReactNode;
}): Promise<ReactNode> {
  await new Promise((r) => setTimeout(r, 1));
  return children;
}

async function Item({ children }: { children: ReactNode }): Promise<ReactNode> {
  return (
    <ClientWrapper>
      <AsyncChild>{children}</AsyncChild>
    </ClientWrapper>
  );
}

export async function renderAction(input: string): Promise<ReactNode> {
  return (
    <Item>
      <div>
        <Item>
          <div>{input}</div>
        </Item>
      </div>
    </Item>
  );
}
