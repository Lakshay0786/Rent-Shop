import Hero from "./components/Hero";
import Api from "./Api";

function App() {

  return (
    <div>
      <Hero />
      <Api num='1' h1='TOP RATED' />
      <Api num='2' h1='MY LIST' />
      <Api num='3' h1='BEST SELLING' />
      <Api num='4' h1='TOP-20' />
    </div >
  );
}

export default App;
