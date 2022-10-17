export interface TaskListProps {
	id: string;
	content: string;
	isComplete: boolean;
}

export interface TaksItemProps extends TaskListProps {
	onComplete: () => void;
	onDelete: () => void;
}

export interface TaskListInputProps {
	taskList: TaskListProps[];
	setTaskList: React.Dispatch<React.SetStateAction<TaskListProps[]>>;
}
