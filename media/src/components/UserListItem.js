import { useThunk } from "../hooks/use-thunk";
import { GoTrashcan, GoSync } from "react-icons/go";
import { deleteUser } from "../store/thunks/user/deleteUser";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {

    const [removeUser, isLoading, error] = useThunk(deleteUser)

    const handleClick = () => {
        removeUser(user)
    }

    const header = <>
        {error && <div> Error Deleting User </div>}
        {isLoading
            ? <GoSync className="animate-spin" />
            : <button className="mr-3" onClick={handleClick} >
                <GoTrashcan />
            </button>}

        {user.name}
    </>

    return (
        <ExpandablePanel header={header} >
            <AlbumsList user={user} />
        </ExpandablePanel>
    )

}

export default UserListItem;