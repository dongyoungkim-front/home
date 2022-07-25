import Background from '../bg_code.jpg';
import Profile from '../cat.png';

import { useRef } from 'react';

function TeamMain() {
  const introRef = useRef(null)
  const introRefexecuteScroll = () => introRef.current.scrollIntoView()

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${Background})` }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">KB AI-OCR Team</h1>
            <p className="mb-5">KB AI-OCR 개발팀을 소개합니다.</p>
            <button className="btn btn-primary" onClick={introRefexecuteScroll}>Get Started</button>
          </div>
        </div>
      </div>

      <div className='hero min-h-screen bg-base-200 max-w-full shadow-2xl' ref={introRef}>
        <div className="hero-content text-center lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">KB AI-OCR Team</h1>
            <p className="py-6">팀 소개</p>

          </div>
        </div>
      </div>

      <div className='hero min-h-screen bg-neutral max-w-full shadow-2xl' style={{ backgroundImage: `url(${Background})` }}>
        <div className="hero-content text-center lg:flex-row-reverse hero-overlay bg-opacity-80">
          <div className='text-neutral-content my-20 '>
            <h1 className="text-5xl font-bold neutral-content">KB AI-OCR Members</h1>
            <p className="py-6">KB AI-OCR 을 만든 맴버를 소개합니다.</p>
            <div className="grid grid-cols-3  mx-20  gap-5">

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">김동영 수석차장</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">곽명성 과장</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">김미향 차장</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">김두형 대리</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">손동원 대리</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">신예지 대리</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">박찬동 대리</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">이현정 대리</h2>
                  <p>자기소개</p>
                </div>
              </div>

              <div className="card  bg-base-100 shadow-xl text-neutral text-left">
                <figure><img src={Profile} alt="Face" /></figure>
                <div className="card-body">
                  <h2 className="card-title">손현수 대리</h2>
                  <p>자기소개</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
export default TeamMain;