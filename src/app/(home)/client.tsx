"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({ text: "hello world" });
  return <div>page client; says {data.greeting}</div>;
};
