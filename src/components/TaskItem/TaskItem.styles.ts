import { StyleSheet } from "react-native";
import {
	gray100,
	gray300,
	gray400,
	gray500,
	_blue,
	_purple
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 12,
		paddingRight: 8,
		paddingVertical: 12,
		backgroundColor: gray500,
		borderRadius: 8,
		marginBottom: 8,
		borderColor: gray400,
		borderWidth: 1
	},
	checkBox: {
		borderColor: _blue,
		borderWidth: 2,
		width: 18,
		height: 18,
		borderRadius: 999
	},
	checkBoxComplete: {
		borderColor: _purple,
		borderWidth: 2,
		width: 18,
		height: 18,
		borderRadius: 999,
		backgroundColor: _purple,
		justifyContent: "center",
		alignItems: "center"
	},
	correctIcon: {
		width: 10,
		height: 10
	},

	text: {
		flex: 1,
		color: gray100,
		fontSize: 14
	},
	textComplete: {
		flex: 1,
		color: gray300,
		fontSize: 14,
		textDecorationLine: "line-through"
	},
	delButton: {
		paddingHorizontal: 10,
		paddingVertical: 9
	},
	delButtonActive: {
		paddingHorizontal: 10,
		paddingVertical: 9,
		backgroundColor: gray400,
		borderRadius: 4
	}
});
