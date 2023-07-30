import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="d-flex flex-column align-items-center" style={{ margin : 38 }}>
            {/* <img src="./public/assets/404.png" style={{ marginLeft : 90 , maxWidth : "50%" }}/> */}
            <svg style={{ marginTop : 60 }} fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 472.615 472.615" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,0v78.74h472.615V0H0z M59.077,49.201H39.385V29.509h19.692V49.201z M98.462,49.201H78.769V29.509h19.692V49.201z M137.846,49.201h-19.692V29.509h19.692V49.201z M423.385,49.201H187.077V29.509h236.308V49.201z"></path> </g> </g> <g> <g> <path d="M0,98.432v374.183h472.615V98.432H0z M137.846,137.817h196.923v19.692H137.846V137.817z M285.538,251.047v59.077 c0,29.856-24.298,54.154-54.154,54.154c-29.856,0-54.154-24.298-54.154-54.154v-59.077c0-29.856,24.298-54.154,54.154-54.154 C261.24,196.894,285.538,221.191,285.538,251.047z M68.923,196.894h19.692v78.769h49.231v-29.538h19.692v118.154h-19.692v-68.923 H68.923V196.894z M334.769,433.201H137.846v-19.692h196.923V433.201z M393.846,364.278h-19.692v-68.923h-68.923v-98.461h19.692 v78.769h49.231v-29.538h19.692V364.278z"></path> </g> </g> <g> <g> <path d="M231.385,216.586c-19,0-34.461,15.461-34.461,34.462v59.077c0,18.999,15.461,34.462,34.461,34.462 c19,0,34.462-15.462,34.462-34.462v-59.077C265.846,232.047,250.385,216.586,231.385,216.586z"></path> </g> </g> </g></svg>
            <h1 className="text-white" style={{ marginTop : 50 }}>Sorry The Page Is Not</h1>
            <h1 className="text-white" style={{ marginTop : 5  }}>Found !</h1>
            <Link to={"/"}>
                <button className="btn bg-light text-dark fs-2 rounded" style={{ margin : 50 , width : 300 }}>Home</button>
            </Link>
        </div>
    )
}