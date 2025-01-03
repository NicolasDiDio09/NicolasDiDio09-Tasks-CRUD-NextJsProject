import { TaskForm } from "@/app/new/task-Form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function TaskPageEdit({params}: { params: { id: string } }) {

 const task = await prisma.task.findFirst({ 
    where: { id: parseInt(params.id) }
  })
  if (!task) {
    redirect("/");}

  console.log(task);
  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={task}></TaskForm>
    </div>
  );
}