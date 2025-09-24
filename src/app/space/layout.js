import Navbar from "@/components/pageCompo/NavBar";

export default function SpaceLayout({ children }) {
  return (
    <div className="min-h-screen">

      <Navbar />
      {children}
    </div>
  );
}
