import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store"
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {

    const [removeAlbum, handleRemoveAlbum] = useRemoveAlbumMutation()

    const handleRemove = () => {
        removeAlbum(album)
    }

    const header = <div className="flex flex-row items-center">
        <GoTrashcan className="mr-3 cursor-pointer" onClick={handleRemove} />
        {album.title}
    </div>

    return <div>
        <ExpandablePanel key={album.id} header={header} >
            <PhotosList album={album} />
        </ExpandablePanel>
    </div>

}

export default AlbumsListItem