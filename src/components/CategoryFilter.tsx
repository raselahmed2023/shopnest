"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <select
      value={selectedCategory}
      onChange={(event) =>
        onChange(event.target.value)
      }
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 capitalize outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 md:w-64"
    >
      <option value="all">
        All Categories
      </option>

      {categories.map((category) => (
        <option
          key={category}
          value={category}
          className="capitalize"
        >
          {category}
        </option>
      ))}
    </select>
  );
}