const Card = (props) => {
    const handleFileName = (name) => {
        const cleanedName = name.replace(/\([^)]+\)/g, '').replace(/\.mp4/g, '')
        return cleanedName
    }

    const handleDuration = (val) => {
        const time = Math.floor(val)
        const hours = Math.floor( time / 3600 )
        const minute = Math.floor( time / 60 )
        const second = Math.floor( time % 60)
        const final = `${hours > 10 ? hours : '0' + hours}:${minute > 10 ? minute : '0' + minute}:${second > 10 ? second : '0' + second}`
        return final
    }

    const handleSimiliarity = (val) => {
        if(val < 1) {
            const final = val.toFixed(2).slice(2)
            return final
        }
        return `${val}00`
    }
 
    return props.data.map((val, i) => {
        return (
            <div className="card col-md-4 col-sm-6" key={i}>
                <div className="card-header fw-bold text-uppercase fs-6">{handleFileName(val.filename)}</div>
                <div className="card-body">
                    <video src={val.video} controls className="w-100"></video>
                    <p className="text-danger m-0">Episode {val.episode}</p>
                    <p className="text-primary  m-0">{handleDuration(val.from)} - {handleDuration(val.to)}</p>
                    <p className="text-success  m-0">{handleSimiliarity(val.similarity)}% Similarity</p>
                </div>
            </div>
        )
    })
}

export default Card