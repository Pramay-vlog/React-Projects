import { useFetchPhotosQuery, useAddPhotosMutation } from "../store"
import Skeleton from "./Skeleton"
import PhotosListItem from "./PhotosListItem"

function PhotosList({ album }) {
    const { data, error, isFetching } = useFetchPhotosQuery(album)
    const [addPhotos, addPhotoResult] = useAddPhotosMutation(album)

    const handleAddPhoto = () => {
        addPhotos(album)
    }

    let content;
    if (error) content = <div>Error Fetching Photos</div>
    else if (isFetching) content = <Skeleton boxCount={4} className="mr-3 h-10 w-full" />
    else content = data.map((photo) => {
        return <PhotosListItem key={photo.id} photo={photo} />
    })

    return <div>
        <div className="m-2 flex flex-row justify-between items-center" >
            Photos List
            <button onClick={handleAddPhoto} >
                + Add
            </button>
        </div>
        <div className="mx-8 flex flex-row flex-wrap justify-center" >
            {content}
        </div>
    </div>

}

export default PhotosList