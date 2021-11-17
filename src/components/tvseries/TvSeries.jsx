import React, { useState, useEffect } from 'react'
import '../home/Home.css'
import Card from '../ui/Card';

function TvSeries() {
    const [animes, setanimes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://animeapi059.herokuapp.com/getAnimes").then(response => {
            return response.json()
        }).then(data => {
            setanimes(data)
            setIsLoading(false)
        })
    }, [])

    const filteredAnimes = animes.filter(anime => {
        return anime.type == "TV series"
    })

    return (
        <div className="homediv">
            <div className="content">
                {isLoading && <div class="loader"></div>}
                {filteredAnimes.map(anime => {
                    return <Card anime={anime} />
                })}
            </div>
        </div>
    )
}

export default TvSeries
