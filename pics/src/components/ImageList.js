import ImageShow from './ImageShow'

function ImageList({ images }) {
    const renderImages = images.map((image) => {
        //* Add the key to the top most jsx element in the list.
        //* Here is <div> 
        return (
            <div key={image.id} >
                <ImageShow images={image} />
            </div>
        )
    })


    return <div>{renderImages}</div>
}

export default ImageList