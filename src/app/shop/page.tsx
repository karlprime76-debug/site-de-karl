import { ProductCard } from "@/components/ProductCard";
import { SectionTitle } from "@/components/SectionTitle";
import { products } from "@/data/products";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function ShopPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.shopTitle}
        subtitle={dict.pages.shopSubtitle}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm font-semibold text-zinc-50">
          {dict.pages.shopComingSoonTitle}
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          {dict.pages.shopComingSoonBody}
        </p>
      </div>
    </div>
  );
}
