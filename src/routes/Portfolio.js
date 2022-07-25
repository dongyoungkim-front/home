import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioMain from '../components/Portfolio/PortfolioMain';

function Portfolio() {
  // color changes
  const [colormode, setColormode] = useState("bumblebee");
  const changeColor = () => {
    if (colormode === "bumblebee") {
      setColormode("dark");
    } else {
      setColormode("bumblebee");
    }
  }
  return (
    <div className='container mx-auto max-w-full ' data-theme={colormode}>
      <Navbar changeColor={changeColor} />
      <PortfolioMain />
      <Footer />
    </div>
    
  )
}
export default Portfolio;