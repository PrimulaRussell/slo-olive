import Search from "../images/icons8-search-50.png";
import Shopping from "../images/icons8-shopping-bag-75.png";
import User from "../images/icons8-user-50.png";

const Header = () => {
    return (
        <div>
            <h1>SLO OLIVE</h1>
            <img alt="Search" src={Search} />
            <img alt="Shopping Bag" src={Shopping}/>
            <img alt="User" src={User}/>
        </div>
    )
}

export default Header;