import "./App.css";
import Button from "./components/Button";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import landingPageData from "./constant/webData";

function App() {
  console.log(landingPageData);
  const { header, hero, features, testimonials } = landingPageData;
  return (
    <div>
      <Header header={header} />
      <Hero hero={hero} />
      <Features features={features} />
      <Testimonial testimonials={testimonials} />
      <Footer header={header} />
    </div>
  );
}

export default App;
