import Hero from "@/components/Hero";
import InfoSectionTop from "@/components/MainPage/InfoSectionTop";
import NewsletterCard from "@/components/MainPage/NewsletterCard";
import ProductDetailsIndex from "@/components/MainPage/ProductDetailsIndex";

export default function Home() {
  return (
    <div className="bg-white pt-20">
      <Hero />
      <InfoSectionTop />
      <NewsletterCard />
      <ProductDetailsIndex />
    </div>
  );
}
