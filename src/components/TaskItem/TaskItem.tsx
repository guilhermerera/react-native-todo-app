import { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { TaksItemProps } from "../../../interfaces/GeneralInterfaces";
import { styles } from "./TaskItem.styles";

export default function TaskItem({
	content,
	isComplete,
	onComplete,
	onDelete
}: TaksItemProps) {
	const [isTrashActive, setIsTrashActive] = useState(false);

	function handleTrashPressIn() {
		onDelete();
		setIsTrashActive((prev) => !prev);
	}

	function handleTrashPressOut() {
		setIsTrashActive((prev) => !prev);
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={onComplete}
				activeOpacity={1}
				style={{ padding: 12 }}>
				<View style={isComplete ? styles.checkBoxComplete : styles.checkBox}>
					{isComplete && (
						<Image
							style={styles.correctIcon}
							source={require("../../../assets/icons/correct.png")}
						/>
					)}
				</View>
			</TouchableOpacity>

			<Text style={isComplete ? styles.textComplete : styles.text}>
				{content}
			</Text>
			<TouchableOpacity
				style={isTrashActive ? styles.delButtonActive : styles.delButton}
				activeOpacity={1}
				onPressIn={() => handleTrashPressIn()}
				onPressOut={() => handleTrashPressOut()}>
				<Image
					source={
						isTrashActive
							? require("../../../assets/icons/trash_active.png")
							: require("../../../assets/icons/trash.png")
					}
				/>
			</TouchableOpacity>
		</View>
	);
}
