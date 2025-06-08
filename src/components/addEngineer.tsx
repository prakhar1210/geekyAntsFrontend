"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function AddEngineer() {
  const [form, setForm] = useState({
    name: "",
    skills: "",
    seniority: "junior",
    maxCapacity: 100,
    department: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await api.post("/engineers", form);
      alert("Engineer added!");
    } catch (err) {
      console.error(err);
      alert("Failed to add engineer.");
    }
  };

  return (
    <div className="p-4 border rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Add Engineer</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            className="border p-2 w-full"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="skills" className="block mb-1 font-medium">
            Skills (comma separated)
          </label>
          <input
            className="border p-2 w-full"
            type="text"
            id="skills"
            name="skills"
            placeholder="React, Node.js"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="seniority" className="block mb-1 font-medium">
            Seniority
          </label>
          <select
            className="border p-2 w-full"
            id="seniority"
            name="seniority"
            onChange={handleChange}
            value={form.seniority}
          >
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        <div>
          <label htmlFor="maxCapacity" className="block mb-1 font-medium">
            Max Capacity
          </label>
          <input
            className="border p-2 w-full"
            type="number"
            id="maxCapacity"
            name="maxCapacity"
            placeholder="100"
            onChange={handleChange}
            value={form.maxCapacity}
          />
        </div>

        <div>
          <label htmlFor="department" className="block mb-1 font-medium">
            Department
          </label>
          <input
            className="border p-2 w-full"
            type="text"
            id="department"
            name="department"
            placeholder="Engineering"
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleSubmit}
        >
          Add Engineer
        </button>
      </div>
    </div>
  );
}
