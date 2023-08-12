import { useState } from "react"
import { getAnimeByImage } from "../api"

const FormUpload = ({handleAnimes}) => {
    const [image, setImage] = useState([])

    function handleImage(e) {
        setImage(e.target.files[0])
    }

    function handleApi() {
        const form = new FormData()
        form.append('image', image)
        getAnimeByImage(form).then(res => {
            handleAnimes(res)
        })
    }
    return (
        <>
            <div className="w-50 mx-auto d-flex justify-content-center flex-column h-screen">
                <h3 className="text-center">Upload Image</h3>
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control mb-2" name="image" id="image" onChange={handleImage} />
                <button onClick={handleApi} className="btn btn-primary">Submit</button>
            </div>
        </>
    )
}

export default FormUpload