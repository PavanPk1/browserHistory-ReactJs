import './index.css'

const HistoryItem = props => {
  const {historyData, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyData

  return (
    <li className="his-container" key={id}>
      <p className="time">{timeAccessed}</p>
      <div className="his-content">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="title">{title}</p>
        <p className="domain-url"> {domainUrl}</p>
        <div>
          <button
            className="delete-icon"
            onClick={deleteUser}
            data-testid="delete"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
