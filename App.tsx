import { StatusBar } from "react-native";
import { gray700 } from "./GlobalStyles";
import Home from "./src/screen/Home/";

export default function App() {
	return (
		<>
			<StatusBar backgroundColor={gray700} barStyle='light-content' />
			<Home />
		</>
	);
}
