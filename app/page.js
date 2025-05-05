import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-8 pb-20 sm:p-20">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}