import Image from "next/image"
import "../theme43.css"

const Header = () => {

    const showOverlay = () => {
        document.getElementById("theSideOverlay").classList.toggle("showOverlay")
        document.getElementById("theOverlay").classList.toggle("showOverlay")
    }

    return (
        <div>
            <header className="temOneHeader">
                <nav>
                    <Image unoptimized={true} width={100} height={100} src="https://absa7kzimnaf.blob.core.windows.net/templates-images/service/download.png" alt="" />
                    <div onClick={showOverlay}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
                <h1>Services Details</h1>
                <div>
                    <p className="homeDot">Home</p>
                    <p>Services Details</p>
                </div>
            </header>
        </div>
    )
}

export default Header