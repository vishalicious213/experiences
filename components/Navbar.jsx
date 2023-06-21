import logo from "/logo.png"

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <img src={logo} alt="airbnb logo" />
            </div>
        </nav>
    )
}