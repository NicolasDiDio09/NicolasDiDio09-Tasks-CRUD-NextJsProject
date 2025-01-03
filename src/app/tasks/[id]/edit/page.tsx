import { TaskForm } from "@/app/new/task-Form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
//import { PageProps } from "@/app/types";

export default async function TaskPageEdit({params}: {params: Promise<{ id: string }>}) {

  const { id } = await params; 
 const task = await prisma.task.findFirst({ 
    where: { id: parseInt(id) }
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