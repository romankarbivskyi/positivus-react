import { Companies, Header, Hero } from "./components";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Header />

      <Hero />

      <Companies />

      <div className="h-[140px]"></div>

      <Services />
    </div>
  );
};

export default App;
