import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <>
            <p>
                404
                <br/>
                Not Found Page
            </p>
            <Link to="/">Go Home</Link>
        </>
    )
}

export default NotFound;