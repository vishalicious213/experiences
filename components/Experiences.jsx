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
            />
        )
    })

    return (
        <div className="experiences">
            {elements}
        </div>
        
    )
}