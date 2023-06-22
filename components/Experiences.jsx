import Card from "./Card"
import katie from "/katie-zaferes.png"

export default function Experiences() {
    return (
        <Card 
            img={katie}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
        />
    )
}