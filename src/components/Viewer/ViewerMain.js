import ViewerResults from "./ViewerResults";
import ViewerList from "./ViewerList";

function ViewerMain(result, page) {
  return (
    <div className="drawer drawer-mobile h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {ViewerResults(result, page)}
      {ViewerList(result, page)}
    </div>
  )
}
export default ViewerMain;