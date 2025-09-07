import BlogComponent from "@/components/BlogComponent";
import ShopsOverview from "@/components/ShopsOverview";
import SubPageHeader from "@/components/SubPageHeader";

export default function Home() {
  return (
    <div className="bg-white pt-20">
      <SubPageHeader
        headline="Stores"
        text="These are the official stores where you can buy our clothes."
      />
      <ShopsOverview />
    </div>
  );
}
