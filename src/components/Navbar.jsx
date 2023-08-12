import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="w-100 py-2 px-5 bg-dark position-fixed z-1">
                <div className="d-flex justify-content-between">
                    <h4 className="text-center text-white">Track Anime</h4>
                    <div className="d-flex gap-3">
                        <Link to='/' className="text-decoration-none text-white text-primary:hover ">Upload</Link>
                        <Link to='/search' className="text-decoration-none text-white">Search</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar