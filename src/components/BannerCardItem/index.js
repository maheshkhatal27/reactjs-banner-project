// Component is implemented here
import './index.css'

const BannerProfile = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  const bannerClassName = `card ${className}`
  return (
    <li className={bannerClassName}>
      <div>
        <h1 className="banner-title">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerProfile
