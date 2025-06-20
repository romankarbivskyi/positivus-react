import {
  CaseStudies,
  Companies,
  ContactUs,
  CTACard,
  Footer,
  Header,
  Hero,
  Team,
  Testimonials,
  WorkingProcess,
} from "./components";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="overflow-hidden">
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

      <div className="h-35"></div>

      <Team />

      <div className="h-25"></div>

      <Testimonials />

      <div className="h-35"></div>

      <ContactUs />

      <div className="h-25"></div>

      <Footer />
    </div>
  );
};

export default App;
