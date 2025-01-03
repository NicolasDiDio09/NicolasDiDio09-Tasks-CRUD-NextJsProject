/* eslint-disable @typescript-eslint/no-unused-vars */
  "use server"
import prisma from "@/lib/prisma";
import exp from "constants";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { parse } from "path";

export async function createTask (formData: FormData){

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();

  console.log({name,description,priority});

  if (!name || !description || !priority) {
    return alert("Please fill out all fields")
  }
 const newTask = await prisma.task.create({
    data: {
      name: name as string,
      description: description as string,
      priority: priority as string,
    }
  })
  console.log({newTask});
  redirect("/")
}
export async function removeTask(formData: FormData) {
  "use server"
  const taskId = formData.get("taskId")?.toString();  
  
  if (!taskId) {
    return;
  }
  await prisma.task.delete({where: {id: Number(taskId)}});
  revalidatePath("/");
}

export async function updateTask(formData: FormData) {
  const id = formData.get("id")?.toString();
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const priority = formData.get("priority")?.toString();

  if (!id || !name || !description || !priority) {
    return;
  }

  await prisma.task.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      description,
      priority
    }
  });

  redirect("/");

}