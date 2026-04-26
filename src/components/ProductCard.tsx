import Image from "next/image";

import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/11]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
        {product.badge ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-semibold text-zinc-100">
            {product.badge}
          </div>
        ) : null}
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-zinc-50">{product.name}</p>
        <p className="mt-1 text-xs text-zinc-300">{product.price}</p>
        <button
          type="button"
          className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full border border-white/10 bg-black/25 px-4 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
        >
          View
        </button>
      </div>
    </div>
  );
}
