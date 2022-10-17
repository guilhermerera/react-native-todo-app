import { styles } from "./EmptyTaskList.styles";
import { Image, Text, View } from "react-native";

export default function EmptyTaskList() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.icon}
				source={require("../../../assets/icons/clipboard.png")}
			/>
			<Text style={[styles.text, { marginTop: 16, fontWeight: "bold" }]}>
				Você ainda não tem tarefas cadastradas
			</Text>
			<Text style={styles.text}>
				Crie tarefas e organize seus itens a fazer
			</Text>
		</View>
	);
}
