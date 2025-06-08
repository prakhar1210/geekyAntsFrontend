"use client";

import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

type Engineer = {
  id: number;
  name: string;
  skills: string;
  seniority: string;
  maxCapacity: number;
  department: string;
};

export default function EngineerList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["engineers"],
    queryFn: async () => {
      const res = await api.get("/engineers");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading engineers...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Engineers</h2>
      <div className="grid grid-cols-2 gap-4">
        {data.map((eng: Engineer) => (
          <div key={eng.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{eng.name}</h3>
            <p>Skills: {eng.skills}</p>
            <p>Seniority: {eng.seniority}</p>
            <p>Max Capacity: {eng.maxCapacity}%</p>
            <p>Department: {eng.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
