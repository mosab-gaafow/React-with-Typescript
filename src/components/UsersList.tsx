import { User } from "../interfaces/user"

// array
interface Users {
    users: User[]
}

const UsersList = (props: Users) => {



  return (
    <div>
        {
            props?.users?.map(user => (
                <>
                <li>{user.name}</li>
                <li>{user.address.city}</li>
                </>
            ))
        }
    </div>
  )
}

export default UsersList
