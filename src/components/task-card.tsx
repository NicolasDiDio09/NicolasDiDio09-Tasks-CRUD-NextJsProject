/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { Task } from '@prisma/client';
import { TaskButtonDelete } from './task-button-delete';
import Link from 'next/link';

function TaskCard({task}:{task:Task}) {

    if (!task.id) {
    console.error("Task ID is missing");
    return null;
  }
  
  return (
    <div>
      <Card >
            <CardHeader className="flex flex-row justify-between">
            <CardTitle>
              {task.name}
            </CardTitle>
            <Badge className={clsx({
              'bg-red-500': task.priority === 'high',
              'bg-yellow-500': task.priority === 'medium',
              'bg-green-500': task.priority === 'low',
              'bg-blue-500': task.priority === 'urgent',
            })}>
              {task.priority}
            </Badge>
          </CardHeader>
          <CardContent> 
            <p>
            {task.description}
            </p>
            <span className="text-slate-600">
              fecha
            </span>
          </CardContent>
          <CardFooter className="flex gap-x-2 justify-end">
            <TaskButtonDelete taskId={task.id}></TaskButtonDelete>
            <Link 
              href={`/tasks/${task.id}/edit`}
              className={buttonVariants({variant: "secondary"})}
            >
              Edit
            </Link>
          </CardFooter>
            
        </Card>
    </div>
  )
}
export default TaskCard;