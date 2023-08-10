import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"
import { useState, useRef } from "react"
import { getAnimeBySearch } from "../api"

const SearchPage = () => {
    const [animes, setAnimes] = useState([])
    const [url, setUrl] = useState()
    const cardRef = useRef()

    const handleChange = e => {
        setUrl(e.target.value)
        console.log(url)
    }

    const handleGetBySearch = ref => {
        getAnimeBySearch(url).then( res => {
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
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="w-50 mx-auto d-flex justify-content-center flex-column h-screen">
                <h3 className="text-center">Search</h3>
                <input type="text" className="form-control mb-2" name="url" id="search" placeholder="Masukkan url gambar" onChange={handleChange} />
                <button onClick={() => handleGetBySearch(cardRef.current)} className="btn btn-primary mt-2">Submit</button>
            </div>
            <div className="container" ref={cardRef}>
                <div className="row g-2">
                    <Card data={animes}></Card>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default SearchPage