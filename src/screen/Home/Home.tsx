import { useState } from "react";
import { View } from "react-native";
import { styles } from "./Home.styles";
import Header from "../../components/Header";
import TaskInput from "../../components/TaskInput";
import TaskList from "../../components/TaskList/TaskList";
import { taskListProps } from "../../../interfaces/GeneralInterfaces";

export default function Home() {
	const [taskList, setTaskList] = useState<taskListProps[]>([]);

	return (
		<>
			<View style={styles.bodyContainer}>
				<Header />
				<View style={styles.mainContainer}>
					<TaskInput taskList={taskList} setTaskList={setTaskList} />
					<TaskList taskList={taskList} setTaskList={setTaskList} />
				</View>
			</View>
		</>
	);
}
