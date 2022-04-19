import { Icon_cart, Icon_user } from "../assets/icons";

const Header = () => {
	return (
		<div className="w-full h-24 shadow-xl">
			<div className="w-full h-full flex justify-between items-center px-10">
			<span className="font-light text-lg">StarDuck.</span>
			<nav className="w-32 h-full flex justify-between">
				<button className="w-16 h-full flex centered" onClick={() => console.log("trigered")}><img src={Icon_cart} alt="cart"/></button>
				<button className="w-16 h-full flex centered" onClick={() => console.log("trigered")}><img src={Icon_user} alt="user"/></button>
			</nav>
			</div>
		</div>
	);
};

export default Header;
