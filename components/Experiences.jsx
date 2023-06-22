import Card from "./Card"
import data from "../data"

export default function Experiences() {
    const elements = data.map(item => {
        return (
            <Card 
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
        <div>
            {elements}
        </div>
        
    )
}