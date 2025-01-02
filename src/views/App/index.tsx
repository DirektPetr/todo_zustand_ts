import style from './index.module.scss'

import {useToDoStore} from '../../data/stores/useToDoStore';
import * as React from "react";
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
    // console.log(tasks)
    const tasks = useToDoStore(state => state.tasks)
    const createTask = useToDoStore(state => state.createTask)
    const updateTask = useToDoStore(state => state.updateTask)
    const removeTask = useToDoStore(state => state.removeTask)

    return (
        <article className={style.article}>
            <h1 className={style.articleTitle}>To Do App</h1>
            <section className={style.articleSection}></section>
            <section className={style.articleSection}></section>
        </article>
    );
};

