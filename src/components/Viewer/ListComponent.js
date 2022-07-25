import { Link } from "react-router-dom";

function ListComponent(imgsrc, indicatorText, isPrimary, key, page) {

  return (
    <div className="indicator" key={key}>
      <span className={String(key) === page ? "indicator-item indicator-top indicator-center badge badge-secondary" : "indicator-item indicator-top indicator-center badge badge-default"}>
        {indicatorText}
      </span>
      <Link to={`/launcher/viewer/${key}`}>
        <div className={String(key) === page ? "card w-28 bg-base-300 place-items-center shadow-2xl border-solid border-2 border-current" : "card w-28 bg-base-300 place-items-center shadow-2xl"}>
          <figure><img src={imgsrc} alt="img" /></figure>
        </div>
      </Link>
    </div >
  )
}
export default ListComponent;