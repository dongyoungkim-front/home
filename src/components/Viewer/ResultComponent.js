function ResultComponent(resultTitle, resultText, leaveOpen, key) {
  return (
    <div key={key} tabIndex="0" className={leaveOpen ? "collapse collapse-arrow collapse-open border border-base-300 bg-base-100 rounded-box" : "collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"}>
      <div className="collapse-title text-xl font-medium">
        {resultTitle}
      </div>
      <div className="collapse-content">
        <div dangerouslySetInnerHTML={{ __html: resultText }}>
        </div>
      </div>
    </div>
  )
}
export default ResultComponent