import logo from "./Apple-logo.png"

export default function Home() {
    console.log(logo)
    return (
        <div>
            <h1 className="unique">Welcome to Flatapple Inventory Management Tool</h1>
            <h2>Click on "Stores" to navigate through each Flatapple store!</h2>
            <img src={logo} className='logo'/>
        </div>
    )

}
