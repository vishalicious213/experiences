import Card from "./Card"
import data from "../data"

export default function Experiences() {
    const elements = data.map(item => {
        return (
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })

    return (
        <div className="experiences container">
            {elements}
        </div>
        
    )
}