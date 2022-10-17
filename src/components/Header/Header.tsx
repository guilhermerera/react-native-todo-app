import { Image, View, StyleSheet } from "react-native";
import { styles } from "./Header.styles";

export default function Header() {
	return (
		<View style={styles.container}>
			<Image source={require("../../../assets/logos/Logo.png")} />
		</View>
	);
}
