import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Article.css'

function Article() {
    const params = useParams()
    const [animes, setanimes] = useState([]);
    const [isloading, setisloading] = useState(true)

    useEffect(() => {
        fetch(`https://animeapi059.herokuapp.com/anime/${params.id}`).then(response => {
            return response.json()
        }).then(data => {
            setanimes(data)
            setisloading(false)
        })
    }, [])

    return (
        <div className="articlediv">
            {isloading && <div class="loader"></div>}
            {animes.map((anime) => {
                return <div className="articlediv row">
                    <div className="col-lg-4 poster-div">
                        <img src={anime.poster} alt="poster" />
                    </div>
                    <div className="col-lg-8 info-div">
                        <h2>{anime.title}</h2>
                        <span>rating : <b>{anime.rating}</b></span>
                        <p>{anime.info}</p>
                        <div id="moreinfo">
                            <span>{anime.type}</span>
                            <span>Ep {anime.episodes}</span>
                            <span>Status : {anime.status}</span>
                            <a className="watch-btn" href={anime.watchurl}>Watch Now</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Article
