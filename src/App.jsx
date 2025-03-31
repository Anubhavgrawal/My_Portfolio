import Navbar from "./Component/Navbar/Navbar";
import Hero_section from "./Component/Hero-section/hero_section";
import About from "./Component/About/About";
import My_projects from "./Component/My_projects/My_projects";
import Contect from "./Component/Contect/Contect";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero_section></Hero_section>
      <About></About>
      <My_projects></My_projects>
      <Contect></Contect>
      <Footer></Footer>
    </>
  );
}

export default App;
