import katie from "/katie-zaferes.png"
import star from "/star.png"

export default function Card() {
    return (
        <div className="card">
            <img className="experience-pic" src={katie} />
            <p><img className="star" src={star}/>5.0 <span className="gray-text">(6) • USA</span></p>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
        </div>
    )
}