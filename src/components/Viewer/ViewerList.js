import ListComponent from "./ListComponent";
function ViewerList(result, page) {
  
  return (
    <div className="drawer-side h-full bg-base-200">
      <label htmlFor="my-drawer-2" className="drawer-overlay bg-base-200"></label>
      <div className="menu bg-base-200 p-4 overflow-y-auto w-40  text-base-content h-full">
        <div className='flex-none space-y-4 h-full'>
          {result.map((item, key) => ListComponent(item.thumbnailImage, item.title, item.setCurrent, key, page))}
        </div>
      </div>

    </div>
  )

}
export default ViewerList;