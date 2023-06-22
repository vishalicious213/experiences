import star from "/star.png"

export default function Card({img, rating, reviewCount, location, title, price}) {
    return (
        <div className="card">
            <img className="experience-pic" src={img} />
            <p><img className="star" src={star}/>{rating} <span className="gray-text">({reviewCount}) • {location}</span></p>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </div>
    )
}