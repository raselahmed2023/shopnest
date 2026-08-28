"use client";

import {
  useMemo,
  useState,
} from "react";

import type { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({
  products,
}: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState("all");

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          products.map(
            (product) => product.category
          )
        )
      ),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return (
        matchesSearch && matchesCategory
      );
    });
  }, [products, search, category]);

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 md:flex-row">
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={category}
          onChange={setCategory}
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Our Products
        </h2>

        <p className="text-sm text-slate-500">
          {filteredProducts.length} products
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
          <h3 className="text-xl font-bold">
            No products found
          </h3>

          <p className="mt-2 text-slate-500">
            Try another search or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}
        </div>
      )}
    </>
  );
}