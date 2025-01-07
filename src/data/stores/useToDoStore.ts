import {create} from "zustand";
import {generateId} from "../helpers.ts";


interface TaskTypes {
    id: string;
    title: string;
    createdAt: number;
}

interface ToDoStoreTypes {
    tasks: TaskTypes[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStoreTypes>((set, get) => ({
    tasks: [
        // {
        //     id: '1',
        //     title: 'My default task!',
        //     createdAt: 12
        // }
    ],
    createTask: (title) => {
        const {tasks} = get();
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now()
        }
        set({
            tasks: [newTask].concat(tasks)
        })
    },
    updateTask: (id, title) => {
        const {tasks} = get()
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title
            }))
        })
    },
    removeTask: (id) => {
        const {tasks} = get()
        set({
            tasks: tasks.filter((task) => (task.id !== id
            ))
        })
    }
}))