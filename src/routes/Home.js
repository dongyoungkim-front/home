import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeMain from '../components/Home/HomeMain';

function Home() {
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
      <HomeMain />
      <Footer />
    </div>
    
  )
}
export default Home;