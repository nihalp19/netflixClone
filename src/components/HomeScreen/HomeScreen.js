import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Row from '../Row/Row'
import { requests } from '../../Api/Request'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Navbar />
            <Banner />
            <Row 
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row 
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            />
            <Row 
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
            />
            <Row 
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            />
            <Row 
            title="Comdey Movies"
            fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
    
            />
            <Row 
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
            title="Documentries"
            fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen