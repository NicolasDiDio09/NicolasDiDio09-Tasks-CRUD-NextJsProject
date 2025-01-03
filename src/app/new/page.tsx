import { TaskForm } from "./task-Form"

function NewPage(){
  return(
    <div className="flex justify-center items-center h-screen">
      <TaskForm task/>
    </div>
  )
}
export default NewPage