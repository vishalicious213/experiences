import star from "/star.png"

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    return (
        <div className="card">
            <div className="badge">SOLD OUT</div>
            <img className="experience-pic" src={img} />
            <p><img className="star" src={star}/>{rating} <span className="gray-text">({reviewCount}) • {location}</span></p>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </div>
    )
}