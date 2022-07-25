import sample from '../bg_video.mp4';
import { Link } from "react-router-dom";
import { useRef, useState } from 'react';

function HomeMain() {
  const introRef = useRef(null)
  const introRefexecuteScroll = () => introRef.current.scrollIntoView()
  const platformRef = useRef(null)
  const platformRefexecuteScroll = () => platformRef.current.scrollIntoView()
  const teamRef = useRef(null)
  const teamRefexecuteScroll = () => teamRef.current.scrollIntoView()
  const [infoWindow, setInfoWindow] = useState(false);
  const closeInfo = () => setInfoWindow(false);
  const openInfo = () => setInfoWindow(true);

  return (
    <div>
      {/* main top */}
      <div className="hero " >
        <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">KB AI-OCR</h1>
            <p className="mb-5"> 인공지능 문자 탐지/인식/해석 플랫폼 - 금융AI센터 AI Tech 팀 </p>

            <div className='space-x-4 '>
              <button className="btn btn-primary" onClick={introRefexecuteScroll}>KB AI-OCR 더 알아보기</button>
              <Link to="/portfolio"><button className="btn btn-secondary shadow-2xl">포트폴리오</button></Link>
              <Link to="/team"><button className="btn btn-secondary shadow-2xl">개발팀 소개</button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className='hero min-h-screen bg-base-200 max-w-full shadow-2xl' ref={introRef}>
        <div className="hero-content text-center lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">KB AI-OCR</h1>
            <p className="py-6">KB AI-OCR 소개</p>
            <button className="btn btn-primary shadow-2xl" onClick={platformRefexecuteScroll}>KB AI-OCR 공통플랫폼 소개</button>
          </div>
        </div>
      </div>

      <div className='hero min-h-screen bg-primary max-w-full shadow-2xl' ref={platformRef}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='text-primary-content'>
            <h1 className="text-5xl font-bold">KB AI-OCR 공통플랫폼</h1>
            <p className="py-6">KB AI-OCR 공통플랫폼 소개 </p>
            <div className='space-x-4 '>
              <Link to="/launcher"><button className="btn btn-secondary shadow-2xl">KB AI-OCR 테스트 해보기</button></Link>
              <button className="btn btn-primary shadow-2xl" onClick={teamRefexecuteScroll}>개발 및 운영</button>
            </div>
          </div>
        </div>
      </div>


      <div className='hero min-h-screen bg-neutral max-w-full shadow-2xl' ref={teamRef}>
        {infoWindow ? (
          <div className="modal-box relative z-10">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeInfo}>✕</label>
            <h3 className="text-lg font-bold">KB AI-OCR 아용 신청  </h3>
            <div className="py-4">KB AI-OCR 을 이용한 사업에 대한 검토는 금융AI센터 전략팀을 통해 연락바랍니다. </div>
          </div>) : null}
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='text-neutral-content'>
            <h1 className="text-5xl font-bold neutral-content">KB AI-OCR 개발 및 운영 </h1>
            <p className="py-6">KB AI-OCR 자체개발 내용 소개</p>
            <div className='space-x-4 '>
              <Link to="/team"><button className="btn btn-primary shadow-2xl">KB AI-OCR 개발팀 소개</button></Link>
              <button className="btn btn-secondary shadow-2xl" onClick={openInfo}>KB AI-OCR 이용 신청</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default HomeMain;