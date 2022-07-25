import {  Suspense } from "react";
import ResultComponent from "./ResultComponent";

function ViewerResults(result,page) {
  return (
    <div className="drawer-content bg-base-100">
      <div className='mx-auto px-4 py-3 bg-base-200 h-full'  >
        <div className='flex space-x-4'>

          {/* Main image */}
          <div className='flex-auto w-80 '>
            <div className=" card w-97 shadow-2xl max-h-screen ">
              <figure >
                <Suspense>
                {result.map((item, key) => String(key)===page ? <img key="key" src={item.image} alt="img" /> : null )}
                </Suspense>
              </figure>
            </div>
          </div>

          {/* details on right side  */}
          <div className='flex-auto w-20'>
            <Suspense>
            {result.map((item, key) => String(key)===page ? item.results.map((item, ikey) => ResultComponent(item.title, item.content, item.leaveOpen, ikey)) : null )}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ViewerResults;

