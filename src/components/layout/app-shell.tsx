import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-4 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4">{children}</div>
    </main>
  );
}