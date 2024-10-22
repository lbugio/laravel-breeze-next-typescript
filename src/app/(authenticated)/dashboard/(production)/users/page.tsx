import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { UserSchema } from "@/schemas/User";
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import axios from "@/lib/axios"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

 async function getUsers() {
  try {
      const response = await axios.get('/api/users');

      const users = response.data;

      return  z.array(UserSchema).parse(users);

  } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
  }
}


export default async function UserPage() {

  const users = await getUsers()

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        <DataTable data={users} columns={columns} />
      </div>
    </>
  )
}
