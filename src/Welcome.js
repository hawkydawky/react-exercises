import { Link } from "react-router-dom";

export function Welcome(props) {
    return (
        <div>
            <h2>Welcome, {props.name || "Johnny"}</h2>
            <Link to="users/hawkydawky">Github</Link>
        </div>
    )
}