import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchModal } from "@/components/layout/SearchModal";
import { FloatingWidgets } from "@/components/layout/FloatingWidgets";
import { CartDrawer } from "@/components/layout/CartDrawer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="noise-overlay" aria-hidden />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <SearchModal />
      <CartDrawer />
      <FloatingWidgets />
    </>
  );
}
