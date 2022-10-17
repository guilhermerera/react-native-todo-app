import { StyleSheet } from "react-native";
import { gray100, gray500 } from "../../../GlobalStyles";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: -27
	},
	textInput: {
		padding: 16,
		height: 54,
		width: "100%",
		borderRadius: 6,
		backgroundColor: gray500,
		fontSize: 16,
		flex: 1,
		borderWidth: 1,
		color: gray100,
		marginRight: 4
	},
	addButton: {
		borderRadius: 6,
		padding: 18
	},
	icon: {
		width: 16,
		height: 16
	}
});
