import LibraryCatalogue from "@/components/LibraryCatalogue";
import LibraryCollections from "@/components/LibraryCollections";
import LibraryFooter from "@/components/LibraryFooter";
import LibraryHero from "@/components/LibraryHero";
import LibraryNavbar from "@/components/LibraryNavbar";
import LibraryNews from "@/components/LibraryNews";
import LibraryServices from "@/components/LibraryServices";

export default function Home() {
  return (
    <main>
      <LibraryNavbar />
      <LibraryHero />
      <LibraryServices />
      <LibraryCatalogue />
      <LibraryCollections />
      <LibraryNews />
      <LibraryFooter />
    </main>
  );
}
