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
                
                <div className="w3-bar-item">Converters
                    <Link to={"/converter/units"} className="w3-bar-item w3-button"> Unit Converters </Link>
                    <Link to={"/converter/quantity"} className="w3-bar-item w3-button"> Physical Quantity unit Converters </Link>
                    <Link to={"/converter/dementions"} className="w3-bar-item w3-button"> Dementional Converters </Link>
                </div>
                <Link to={"/graphs"} className="w3-bar-item w3-button"> Graphs </Link>
                <Link to={"/settings"} className="w3-bar-item w3-button"> Settings </Link>
            </div>
            
            <button className="w3-button w3-xlarge w3-left w3-hide-large"
                    style={{ margin : "2vw", width : "10vw", marginRight : "5vw" }}
                    onClick={open}
            >&#9776;</button>
        </>
    )
}