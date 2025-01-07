import s from './task.module.scss'
import React, {useState} from "react";

export interface TaskPropsType {
    id: string
    title: string
    onDone: (id: string) => void
    onEdited: (id: string, title: string) => void
    onRemoved: (id: string) => void
}

export const Task: React.FC<TaskPropsType> = (
    {
        id,
        title,
        onDone,
        onEdited,
        onRemoved
    }) => {

    const [checked, setChecked] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [inputEditValue, setInputEditValue] = useState(title)


    return (
        <div className={s.task}>
            <label className={s.taskLabel}>
                <input
                    type={"checkbox"}
                    disabled={isEdit}
                    checked={checked}
                    className={s.taskCheckbox}
                    onChange={(e) => {
                        setChecked(e.target.checked)
                        if (e.target.checked) {
                            onDone(id)
                        }
                    }}
                />
                {isEdit ? (
                    <input
                        value={inputEditValue}
                        onChange={(e) => {
                            setInputEditValue(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                onEdited(id, inputEditValue)
                                setIsEdit(false)
                            }
                        }}
                        className={s.inputEditTitle}
                    />
                ) : (
                    <h3 className={s.taskTitle}>{title}</h3>
                )}

            </label>
            {isEdit ?
                (<button
                    aria-label={'Save'}
                    className={s.taskSave}
                    onClick={() => {
                        onEdited(id, inputEditValue)
                        setIsEdit(false)
                    }}
                />) : (
                    <button
                        aria-label={'Edit'}
                        className={s.taskEdit}
                        onClick={() => {
                            setIsEdit(true)
                        }}
                    />
                )
            }

            <button
                aria-label={'Remove'}
                className={s.taskRemove}
                onClick={() => {
                    if (confirm('Are you sure?'))
                        onRemoved(id)
                }}
            />
        </div>
    )
};
