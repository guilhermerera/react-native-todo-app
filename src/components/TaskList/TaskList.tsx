import { useState } from "react";
import { styles } from "./TaskList.styles";
import { FlatList, Text, View } from "react-native";
import { _blue, _purple } from "../../../GlobalStyles";
import EmptyTaskList from "../EmptyTaskList";
import TaskItem from "../TaskItem";

import {
	TaskListInputProps,
	TaskListProps
} from "../../../interfaces/GeneralInterfaces";

export default function TaskList({
	taskList,
	setTaskList
}: TaskListInputProps) {
	const completedTasks = taskList.filter((task) => task.isComplete === true);

	function completeTask(id: string) {
		const updatedTaskList: TaskListProps[] = [];

		for (let index = 0; index < taskList.length; index++) {
			const task = taskList[index];
			if (task.id === id) {
				task.isComplete = !task.isComplete;
				updatedTaskList.push(task);
			} else {
				updatedTaskList.push(task);
			}
		}

		setTaskList(updatedTaskList);
	}

	function deleteTask(id: string) {
		const updatedTaskList = taskList.filter((task) => task.id !== id);
		setTaskList(updatedTaskList);
	}

	return (
		<>
			<View style={styles.container}>
				<View style={styles.taskCounterWrapper}>
					<Text style={[styles.taskCounterText, { color: _blue }]}>
						Criadas
					</Text>
					<Text style={styles.taskCounterCount}>{taskList.length}</Text>
				</View>
				<View style={styles.taskCounterWrapper}>
					<Text style={[styles.taskCounterText, { color: _purple }]}>
						Concluídas
					</Text>
					<Text style={styles.taskCounterCount}>{completedTasks.length}</Text>
				</View>
			</View>
			<FlatList
				style={styles.taskList}
				data={taskList}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TaskItem
						id={item.id}
						content={item.content}
						isComplete={item.isComplete}
						onComplete={() => completeTask(item.id)}
						onDelete={() => deleteTask(item.id)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => <EmptyTaskList />}
			/>
		</>
	);
}
