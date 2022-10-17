import { StyleSheet } from "react-native";
import { gray100, gray400 } from "../../../GlobalStyles";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 32,
		paddingBottom: 20
	},
	taskCounterWrapper: {
		flexDirection: "row"
	},
	taskCounterText: {
		fontSize: 14,
		fontWeight: "bold"
	},
	taskCounterCount: {
		color: gray100,
		backgroundColor: gray400,
		borderRadius: 999,
		paddingVertical: 2,
		paddingHorizontal: 8,
		fontSize: 12,
		fontWeight: "bold",
		marginLeft: 8
	},
	taskList: {
		width: "100%"
	}
});
