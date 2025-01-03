import { TaskForm } from "@/app/new/task-Form";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function TaskPageEdit({ params }: { params: { id: string } }) {
  // Valida que params.id esté disponible y sea convertible a número
  if (!params || !params.id || isNaN(parseInt(params.id))) {
    redirect("/"); // Redirige si los parámetros no son válidos
  }

  const taskId = parseInt(params.id, 10);

  const task = await prisma.task.findFirst({
    where: { id: taskId },
  });

  if (!task) {
    redirect("/");
  }

  console.log(task);

  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={task} />
    </div>
  );
}
