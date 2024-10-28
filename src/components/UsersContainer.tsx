import { useEffect, useState } from "react"
import { User } from "../interfaces/user"
import UsersList from "./UsersList"


const UsersContainer = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {

        const fetchAPI = async () => {
            try{

                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if(!response.ok) {
                    throw new Error ("not found sxb")
                }

                const data:User[] = await response.json();

                setUsers(data)

            }catch(e){
                console.log(e)
            }

        }
        fetchAPI();

    }, [])

  return (
    <div>
    <UsersList users={users}/>
    </div>
  )
}

export default UsersContainer
