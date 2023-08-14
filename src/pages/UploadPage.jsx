import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Footer from '../components/Footer'
import { getAnimeByImage } from '../api'
import { useState, useRef } from 'react'
import About from "../components/About"

const UploadPage = () => {
  const [animes, setAnimes] = useState([])
  const [image, setImage] = useState()
  const [imagePreview, setImagePreview] = useState(null);

  const cardRef = useRef(null)

  const handleImage = e => {
    setImage(e.target.files[0])
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result)
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleGetByImage = ref => {
    const form = new FormData()
    form.append('image', image)
    getAnimeByImage(form).then(res => {
      if(res.status === 200) setAnimes(res.data.result)
      scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: 'smooth'
      })
    }) 
    .catch(err => {
      alert(err.response.data.error)
    })
    setImage(null)
    setImagePreview(null)
    document.getElementById('image').value = '';
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="w-page mx-auto d-flex justify-content-center flex-column h-screen">
        <h3 className="text-center">Upload Image</h3>
        <label htmlFor="image">Image</label>
        <input type="file" className="form-control mb-2" accept='image/*' name="image" id="image" onChange={handleImage} />
        {imagePreview && <img src={imagePreview} alt="Preview" className='h-25 mx-auto w-100 object-fit-cover' />}
        <button onClick={() => handleGetByImage(cardRef.current)} className="btn btn-primary mt-2">Submit</button>
      </div>
      <div className="container" ref={cardRef}>
        <div className="row g-2">
          <Card data={animes}></Card>
        </div>
      </div>
      <About two="Select the anime image that will be searched through your file"></About>
      <Footer></Footer>
    </>
  )
}

export default UploadPage