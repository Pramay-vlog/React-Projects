import "./css/searchbar.css"

function ImageShow({ images }) {
    return (
        <div className="imageShow">
            <img src={images.urls.small} alt="Random Images" />
        </div>
    )
}

export default ImageShow