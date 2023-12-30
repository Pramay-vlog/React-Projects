import { useFetchAlbumsQuery, useAddAlbumsMutation } from "../store"
import ExpandablePanel from "./ExpandablePanel"
import Skeleton from "./Skeleton"
import AlbumsListItem from "./AlbumsListItem"

function AlbumsList({ user }) {
	const { data, error, isFetching } = useFetchAlbumsQuery(user)
	const [addAlbum, results] = useAddAlbumsMutation()

	const handleClick = () => {
		addAlbum(user)
	}

	let content
	if (isFetching) content = <div> <Skeleton boxCount={3} className="h-10 w-full" /> </div>
	else if (error) content = <div>Error Fetching Albums</div>
	else content = data.map((album) => {

		return <AlbumsListItem key={album.id} album={album} />

	})

	return <div>
		<div className="flex flex-row justify-between items-center m-3" >
			Albums List
			<button onClick={handleClick}>
				+ Add
			</button>
		</div>
		<div> {content} </div>
	</div>

}

export default AlbumsList