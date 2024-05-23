import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Cards from "./components/Cards";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="bg-slate-100 p-8 font-opensans overflow-x-hidden">
      <Header />
      <MainSection />
      <Cards />
      <WhyChoose />
    </div>
  );
}

export default App;
