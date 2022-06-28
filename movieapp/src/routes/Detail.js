import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Detail.scss'
function Detail () {
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState(['1']);
    const {id}= useParams();

    const getMovie = async () => {
        const response = await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        setDetail(json.data.movie)

        setLoading(true)
    }
    
    useEffect (() => {
        getMovie();
    }, [])
    console.log(detail);
    console.log(detail.description_full)
    return (
        <div className='background'>
            {!loading ? <h1>Loading</h1>:
                 <>
                    <div className='contentscontainer'>
                        {<img src={detail.large_cover_image}/>}
                        {<p>{detail.title} ({detail.year})</p>}
                    </div>
                    <div className='summarycontainer'>
                        <p>{detail.description_full}</p>
                        <p><Link to={`/`}>Home</Link></p>
                        <p><iframe width="500" height="281.25" src={`https://www.youtube.com/embed/${detail.yt_trailer_code}`} title={detail.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                    </div>
                 </>

            }
            
        </div>
    )
}
export default Detail;