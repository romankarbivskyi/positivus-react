import {
  CaseStudies,
  Companies,
  CTACard,
  Header,
  Hero,
  WorkingProcess,
} from "./components";
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

      <div className="h-35"></div>

      <CaseStudies />

      <div className="h-35"></div>

      <WorkingProcess />
    </div>
  );
};

export default App;
