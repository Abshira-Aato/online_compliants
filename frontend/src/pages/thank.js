import { Link } from "react-router-dom";

function Thanks(){
    return<div className="thanks">
<div className="form-thnks">
<h1>Thank you</h1>
<p>we received your complaint</p>
<Link to={"/user"}> <button>create another complaint</button> </Link>
</div>
    </div>
}
export default Thanks;