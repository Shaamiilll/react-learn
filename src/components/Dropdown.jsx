import { Link } from 'react-router-dom'
import React from "react";
export default function dropdown() {
  return (
    <div>
      <button className="btn btn-xs mx-10" ><Link to='/counter'>Counter</Link></button>
      <button className="btn btn-xs mx-10"><Link to='/api-data'>Api- data</Link></button>
      <button className="btn btn-xs mx-10"><Link to='/form'>Form</Link></button>
      <button className="btn btn-xs mx-10"><Link to='/todo-list'>To-do List</Link></button>
    </div>

  )
}
