import { Link } from "react-router-dom";

export default function Sidebar() {
    function open() {
        document.getElementById("mySidebar").style.display = "block";
      }
      
    function close() {
        document.getElementById("mySidebar").style.display = "none";
    }
    return (
        <>
            <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left"
                id="mySidebar">
                <button className="w3-bar-item w3-button w3-large w3-hide-large"
                        onClick={close}
                >Close &times;</button>
                
                <Link to={"/"} className="w3-bar-item w3-button" > Standard Calculator </Link>
                <Link to={"/scientific"} className="w3-bar-item w3-button"> Scientific Calculator </Link>
                <Link to={"/converters"} className="w3-bar-item w3-button"> Unit Converters </Link>
                <Link to={"/graphs"} className="w3-bar-item w3-button"> Graphs </Link>
            </div>
            
            <button className="w3-button w3-xlarge w3-left w3-hide-large"
                    style={{ margin : "2vw" }}
                    onClick={open}
            >&#9776;</button>
        </>
    )
}