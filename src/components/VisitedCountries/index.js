import './index.css'

const VisitedCountries = props => {
  const {countryDetails, removeVisitedCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onRemoveClick = () => {
    removeVisitedCountry(id)
  }

  return (
    <li className="flag-img-container">
      <img src={imageUrl} className="flag-img" alt="thumbnail" />
      <div className="country-button-container">
        <p className="visited-country">{name}</p>
        <button onClick={onRemoveClick} className="remove-btn" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
