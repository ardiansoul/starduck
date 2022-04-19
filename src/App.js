import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import { Home } from "./containers";

function App() {
	return (
		<div className="w-full h-screen flex flex-col overflow-hidden">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
