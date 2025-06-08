"use client";

import EngineerList from "@/components/engineerList";
import AddEngineer from "@/components/addEngineer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function EngineersPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Engineer Management</h1>
        <AddEngineer />
        <EngineerList />
      </main>
    </QueryClientProvider>
  );
}
