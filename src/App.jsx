import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";

const App = () => {
  return (
    <div>
      <About />
      <Contact />
      <Gallery />
      <Home />
      <NotFound />
      <Plans />
      <Trainers />
    </div>
  );
};

export default App;