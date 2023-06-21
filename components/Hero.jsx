import hero from "/hero.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={hero} alt="tiled gallery of airbnb experiences" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}