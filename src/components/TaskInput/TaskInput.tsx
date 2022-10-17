import { useState, useRef } from "react";
import { TextInput, TouchableOpacity, View, Image, Alert } from "react-native";
import {
	gray300,
	blueDark,
	_blue,
	purpleDark,
	black
} from "../../../GlobalStyles";
import {
	TaskListInputProps,
	TaskListProps
} from "../../../interfaces/GeneralInterfaces";
import generateID from "../../../services/generateID";

import { styles } from "./TaskInput.styles";

export default function TaskInput({
	taskList,
	setTaskList
}: TaskListInputProps) {
	const [isAddButtonPressed, setIsAddButtonPressed] = useState(false);
	const [isInputTextFocused, setIsInputTextFocused] = useState(false);
	const [newTaskContent, setNewTaskContent] = useState("");

	const taskInputRef = useRef<TextInput | null>(null);

	function handleButtonPressIn() {
		setIsAddButtonPressed((prev) => !prev);
		if (newTaskContent !== "") {
			const newTask: TaskListProps = {
				id: generateID(),
				content: newTaskContent,
				isComplete: false
			};

			setTaskList([...taskList, newTask]);

			taskInputRef.current?.blur();
		} else {
			Alert.alert(
				"Campo de Tarefa Vazio",
				"Por favor, insira uma tarefa para adicioná-la à sua lista."
			);
		}
	}

	function handleButtonPressOut() {
		setNewTaskContent("");
		setIsAddButtonPressed((prev) => !prev);
	}

	function handleInputOnFocus() {
		setIsInputTextFocused((prev) => !prev);
	}

	function handleInputOnBlur() {
		setIsInputTextFocused((prev) => !prev);
	}

	return (
		<View style={styles.container}>
			<TextInput
				ref={taskInputRef}
				style={[
					styles.textInput,
					{ borderColor: isInputTextFocused ? purpleDark : black }
				]}
				placeholder='Adicione uma nova tarefa'
				placeholderTextColor={gray300}
				value={newTaskContent}
				onChangeText={setNewTaskContent}
				onFocus={() => handleInputOnFocus()}
				onBlur={() => handleInputOnBlur()}
			/>
			<TouchableOpacity
				style={[
					styles.addButton,
					{ backgroundColor: isAddButtonPressed ? _blue : blueDark }
				]}
				activeOpacity={1}
				onPressIn={() => handleButtonPressIn()}
				onPressOut={() => handleButtonPressOut()}>
				<View>
					<Image
						style={styles.icon}
						source={require("../../../assets/icons/plus.png")}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
}
