import React, { useState, useEffect } from 'react'
import './Home.css'
import Card from '../ui/Card';

function Home() {
    const [animes, setanimes] = useState([]);
    const [search, setsearch] = useState("");
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
        return anime.title.toString().toLowerCase().includes(search.toString().toLowerCase())
    })

    return (
        <div className="homediv">
            <form>
                <input type="text" onChange={(e) => {
                    setsearch(e.target.value);
                }} />
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                    </svg>
                </button>
            </form>
            <div className="content">
                {isLoading && <div class="loader"></div>}
                {filteredAnimes.map(anime => {
                    return <Card anime={anime} />
                })}
            </div>
        </div>
    )
}

export default Home
