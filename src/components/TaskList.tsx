import { useState } from 'react'

import { FiTrash, FiCheckSquare } from 'react-icons/fi'

import '../styles/tasklist.scss'

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  let tmp
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    if (!newTask) return

    const newTaskTemp = {
      id: Math.random(),
      title: newTask,
      isComplete: false 
    }

    setTasks(oldState => [...oldState, newTaskTemp])
    setNewTask('')

  }

  function handleToggleTaskComplete(id: number) {
    const changeTask = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    }: task)

    setTasks(changeTask)
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }


  return (
    <section className="task-list container">
      <header>
        <h2>Minhas Tarefas</h2>
        <div className="input-group">
          <input 
          type="text" 
          placeholder="Adicionar tarefa" 
          onChange={(e) => setNewTask(e.target.value)} 
          value={newTask} 
          />
          <button type="submit" data-testid="add-task-button" onClick={handleCreateNewTask}>
              <FiCheckSquare size={16} color="#fff"/>
          </button>
        </div>
      </header>
      
      <main>
        <ul>
          {tasks.map(task => (
            <li>
            <div className={task.isComplete ? 'completed' : ''} data-testid="task">
              <label className="checkbox-container">
                <input 
                  type="checkbox" 
                  readOnly 
                  checked={task.isComplete} 
                  onClick={() => handleToggleTaskComplete(task.id)} 
                />
                <span className="checkmark"></span>
              </label>
              <p>{task.title}</p>
            </div>
            <button type="button" data-testid="remove-task-button" onClick={() => handleRemoveTask(task.id)}>
              <FiTrash size={16}/>
            </button>
          </li>
          ))}
        </ul>
      </main>
    </section>
  )
}