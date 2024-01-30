import Providers from "./Providers";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Market from "./components/Market";
import "./index.css";

export default function App() {

  return (
    <div>
      <Providers>
      <Header />
      <Cover />
      <AboutUs />
      <Market />
      <Footer />
      </Providers>
    </div>
  )
}
