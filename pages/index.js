import Banner from "./components/banner/Banner";
import Header from "./components/Header";
import MidSection from "./components/MidSection";

export default function Home() {
  return (
    <div className="w-full bg-img-one bg-cover min-w-['380px']">
      {/* Header */}
      <Header />
      <div className="overflow-y-auto flex-1">
        <Banner />
        <MidSection />
      </div>
    </div>
  );
}
