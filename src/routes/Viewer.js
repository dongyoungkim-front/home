import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Navbar from '../components/Navbar';
import ViewerMain from '../components/Viewer/ViewerMain';
import Footer from '../components/Footer';

// 임지 데이터 로드 
import Result from '../data.json'

function Viewer () {
  let {page} = useParams(0);
  if(page===undefined){
    page="0";
  }
  // load data (temporal)
  const [jsondata, setjsondata] = useState([]);
  useEffect(() => {
    setjsondata(Result.data);
  }, [])
  
  
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
      {ViewerMain(jsondata, page)}
      <Footer />
    </div>
  );
}
export default Viewer;