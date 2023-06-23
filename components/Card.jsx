import star from "/star.png"

export default function Card({img, rating, reviewCount, location, title, price, openSpots}) {
    let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img className="experience-pic" src={`/xp/${img}`} />
            <p><img className="star" src={star}/>{rating} <span className="gray-text">({reviewCount}) • {location}</span></p>
            <p>{title}</p>
            <p><b>From ${price}</b> / person</p>
        </div>
    )
}