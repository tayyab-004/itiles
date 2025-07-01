import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AiBanner from "./components/AiBanner";
import Recommendation from "./components/Recommendation";
import ProductRecommendations from "./components/ProductRecommendation";
import SocialMedia from "./components/SocialMedia";
import Reviews from "./components/Reviews";
import Designs from "./components/Designs";
import EmailUs from "./components/EmailUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AiBanner />
      <Recommendation />
      <ProductRecommendations />
      <SocialMedia />
      <Reviews />
      <Designs />
      <EmailUs />
      <Footer />
    </>
  );
}

export default App;
