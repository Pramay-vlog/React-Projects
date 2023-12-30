import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers, addUser } from "../store"
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import { GoSync } from "react-icons/go";
import UserListItem from "./UserListItem";


function UserList() {

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(getUsers)
    const [doCreateUsers, isCreatingUser, creatingUserError] = useThunk(addUser)

    const { data } = useSelector((state) => {
        return state.users;
    })

    //? GET
    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    //? CREATE
    const handleUserAdd = () => {
        doCreateUsers()
    }

    let content;
    if (isLoadingUsers) {
        content = <div> <Skeleton boxCount={6} className="h-20 w-full" /></div>
    } else if (loadingUsersError) {
        content = <div>Error Fetching Data</div>
    } else {
        content = data.map((user) => <UserListItem key={user.id} user={user} />)
    }

    return <div>
        <div className="flex flex-row justify-between items-center m-3" >
            <h1 className="m-2 text-xl" >User</h1>
            {
                isCreatingUser
                    ? <GoSync className="animate-spin" />
                    : <button onClick={handleUserAdd} className="m-2 text-xl font-semibold" > + Add </button>
            }
            {creatingUserError && "Error Creating User..."}
        </div>
        {content}
    </div>

}


export default UserList;