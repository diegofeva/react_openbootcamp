import React from 'react'
import {useParams}from 'react-router-dom'

const TaskDetailPage = ({task}) => {

  const params = useParams();
  return (
    <div>
      <h1>Task Detail - {params.id}</h1>
      <h2>{`Task name is ${task[(params.id)-1].name}`}</h2>
      <h3>{"This is " + task[(params.id)-1].description}</h3>
    </div>
  )
}

export default TaskDetailPage;
