import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accomodation from "./pages/Accomodation/Accomodation";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/accomodation/:id" element={<Accomodation />} />
					<Route path="*" element={<Error />} /> {/* catch-all for any undefined URLs */}
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
