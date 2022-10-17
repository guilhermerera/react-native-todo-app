import { StyleSheet } from "react-native";
import { gray300, gray400 } from "../../../GlobalStyles";

export const styles = StyleSheet.create({
	container: {
		paddingVertical: 48,
		alignItems: "center",
		borderTopColor: gray400,
		borderTopWidth: 1,
		flex: 1
	},
	icon: {
		width: 54,
		height: 54
	},
	text: {
		fontSize: 14,
		color: gray300
	}
});
