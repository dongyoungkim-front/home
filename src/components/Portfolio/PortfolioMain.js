import Background from '../bg_texture.jpg';
import { useRef } from 'react';

function PortfolioMain() {
  const introRef = useRef(null)
  const introRefexecuteScroll = () => introRef.current.scrollIntoView()

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${Background})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">KB AI-OCR Portfolio</h1>
            <p className="mb-5">KB AI-OCR 를 이용한 서비스를 소개합니다</p>
            <button className="btn btn-primary" onClick={introRefexecuteScroll}>Get Started</button>
          </div>
        </div>
      </div>

      <div className='hero min-h-screen bg-base-200 max-w-full shadow-2xl' ref={introRef}>
        <div className="hero-content text-center lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">법인CDD 사전점검 프로젝트</h1>
            <p className="py-6">법인CDD 프로젝트 소개</p>
            
          </div>
        </div>
      </div>


    </div>
  )
}
export default PortfolioMain;