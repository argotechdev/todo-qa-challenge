import React, { useState } from "react";

function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(task.title);

  const saveEdit = () => {
    // BUG: permite salvar vazio
    onEdit(task.id, tempTitle);
    setIsEditing(false);
  };

  return (
    <li className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
          />
          <button onClick={saveEdit}>Salvar</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span>{task.title}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Excluir</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
