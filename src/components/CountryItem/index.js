import './index.css'

const CountryItem = props => {
  const {countryDetails, markCountryVisited} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    markCountryVisited(id)
  }

  return (
    <li className="countries-list-bg-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button type="button" onClick={onClickVisit} className="visit-btn">
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
