import { useState } from "react";
import axios,{ post } from 'axios';
import {useNavigate} from "react-router-dom"
//https://cookinghoil.tistory.com/114 ref

function Launch() {
  let navigate = useNavigate(); 
  const [imgBase64, setImgBase64] = useState([]); 
  const [imgFile, setImgFile] = useState(null);	
  const [imageUploaded, setImageUploaded] = useState(false);
  const [errorWindow, setErrorWindow] = useState(false);

  // upload file
  const handleChangeFile = (event) => {
    //console.log(event.target.files)
    setImgFile(event.target.files);
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);

        reader.onloadend = () => {
          const base64 = reader.result;
          //console.log(base64)
          if (base64) {
            var base64Sub = base64.toString()
            setImageUploaded(true);
            setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
          }
        }
      }
    }
  }

  const execOCR = async () => {
    if (imgFile===null) {
      setErrorWindow(true);
      return
    }
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("file", file));
    await axios.post('api 주소', fd, {
      headers: {
        "Content-Type": `multipart/form-data; `,
      }
    })
      .then((response) => {
        if (response.data) {
          //console.log(response.data)
          navigate("/launcher/viewer/0");
        }
      })
      .catch((error) => {
        // 예외 처리
        //console.log("error")
        navigate("/launcher/viewer/0");
      })
  } 
  const closeError = () =>  setErrorWindow(false);

  return (
    <div className="hero min-h-screen bg-base-200">

        {errorWindow ? (
        <div className="modal-box relative z-10">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeError}>✕</label>
          <h3 className="text-lg font-bold">KB AI-OCR 사용법</h3>
          <div className="py-4"><div className="badge badge-lg badge-secondary">1. 이미지 선택</div> 버튼을 눌러 OCR 을 수행 할 이미지를 선택하신 후 <div className="badge badge-lg	badge-primary">2. KB AI-OCR 실행</div> 버튼을 눌러 OCR 을 수행합니다.</div>
        </div> ) : null }
      

      <div className="hero-content flex-col lg:flex-row-reverse">
        {imageUploaded===false ? <img src="./images/vision.png" className="card max-w-sm rounded-lg shadow-2xl" alt="default image"/> : null}
        {imgBase64.map((item, key) => {
          return (
            <img
              className="card max-w-sm rounded-lg shadow-2xl"
              src={item}
              alt="upload image"
              key={key}
            />
          )
        })}
        <div>
          <h1 className="text-3xl ">KB AI-OCR </h1>
          <h1 className="text-5xl font-bold"> Launcher</h1>
          <p className="py-6">스캔한 문서 이미지를 텍스트로 변환합니다.</p>
          
          <div className="form-control">
            <div className="input-group">
              <input type="file" id="file" onChange={handleChangeFile} 
               placeholder="Select image file..." className="input input-bordered" style={{display:"none"}} />

              
              <label className="btn btn-secondary" htmlFor="file">
                1. 이미지 선택
              </label>

              <button className="btn btn-primary" onClick={execOCR} >
                2. KB AI-OCR 실행
              </button>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}
export default Launch;