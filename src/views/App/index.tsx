import s from './index.module.scss'

import {useToDoStore} from '../../data/stores/useToDoStore';
import * as React from "react";
import {InputAddTask} from "../components/InputAddTask";
import {Task} from "../components/Task";
// import React, {useEffect} from "react";


export const App: React.FC = () => {
    // const [
    //     tasks,
    //     createTask,
    //     updateTask,
    //     removeTask
    // ] = useToDoStore(state => [
    //     state.tasks,
    //     state.createTask,
    //     state.updateTask,
    //     state.removeTask
    // ])
    // useEffect(() => {
    //     createTask('React')
    // }, []);

    const tasks = useToDoStore(state => state.tasks)
    const createTask = useToDoStore(state => state.createTask)
    const updateTask = useToDoStore(state => state.updateTask)
    const removeTask = useToDoStore(state => state.removeTask)

    return (
        <article className={s.article}>
            <h1 className={s.articleTitle}>To Do App</h1>
            <section className={s.articleSection}>
                <InputAddTask createTask={(title) => {
                    if (title) {
                        createTask(title)
                    }
                }}
                />
            </section>
            <section className={s.articleSection}>
                {!tasks.length && (<p className={s.articleText}>There is no one task.</p>)}
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}/>
                ))}
            </section>
        </article>
    );
};

