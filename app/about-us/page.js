import AboutInfoSection from "@/components/AboutInfoSection";
import AboutMoreDetails from "@/components/AboutMoreDetails";
import SubPageHeader from "@/components/SubPageHeader";

export default function Home() {
  return (
    <div className="bg-white pt-20">
      <SubPageHeader
        headline="About us"
        text="Learn more about our mission, vision and values."
      />
      <AboutInfoSection />
      <AboutMoreDetails />
    </div>
  );
}
