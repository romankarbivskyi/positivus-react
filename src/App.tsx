import { Companies, CTACard, Header, Hero } from "./components";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Header />

      <Hero />

      <Companies />

      <div className="h-35"></div>

      <Services />

      <div className="h-25"></div>

      <CTACard />
    </div>
  );
};

export default App;
