import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";

import "./style.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Header cartCount={cartCount} />
      {/* Section */}
      <Section cartCount={cartCount} setCartCount={setCartCount} />
      {/* Footer */}
      <Footer />
    </>
  );
}
