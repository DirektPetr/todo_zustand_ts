import s from './inputAddTask.module.scss'
import React from "react";
import {useCallback, useState} from "react";

export interface InputAddTaskPropsType {
    createTask: (title: string) => void
}

export const InputAddTask: React.FC<InputAddTaskPropsType> = ({createTask}) => {
    const [inputValue, setInputValue] = useState('')
    const addTask = useCallback(() => {
        createTask(inputValue)
        setInputValue('')
    },[inputValue, createTask])

    return (
        <div className={s.inputAddTask}>
            <input
                type="text"
                className={s.inputAddTaskValue}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask()
                    }
                }}
                placeholder={'Type here...'}
            />
            <button
                aria-label={'Add'}
                className={s.inputAddTaskButton}
                onClick={addTask}
            />
        </div>
    )
};
