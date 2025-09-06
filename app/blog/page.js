import Hero from "@/components/Hero";
import InfoSectionTop from "@/components/MainPage/InfoSectionTop";
import NewsletterCard from "@/components/MainPage/NewsletterCard";
import ProductDetailsIndex from "@/components/MainPage/ProductDetailsIndex";
import SubPageHeader from "@/components/SubPageHeader";

export default function Home() {
  return (
    <div className="bg-white pt-20">
      <SubPageHeader
        headline="Blog"
        text="Learn more about our products, usecases and more."
      />
      <InfoSectionTop />
      <NewsletterCard />
      <ProductDetailsIndex />
    </div>
  );
}
