import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import NavBarMain from "./components/navBar/NavBarMain";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
    </main>
  );
}

export default App;
