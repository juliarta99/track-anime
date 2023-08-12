const About = (props) => {
    return (
        <>
            <div className="container mt-3">
                <h1 className="text-uppercase text-center">Track Anime</h1>
                <p className="text-center text-muted mb-5">"only with pictures you can know the anime"</p>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex gap-2">
                            <h1>1</h1>
                            <p className="text-muted">Select the method search anime</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex gap-2">
                            <h1>2</h1>
                            <p className="text-muted">{props.two}</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="d-flex gap-2">
                            <h1>3</h1>
                            <p className="text-muted">Wait a moment, suitable anime will be found</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About