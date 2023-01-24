import React from 'react'
import Row from './Row'
import "./Home.scss"

const Home = () => {
  return (
    <section className='home'>
        <div className='banner'>

        </div>

        <Row title={"Upcoming"} />
        <Row title={"Popular"} />
        <Row title={"Now playing"} />
        <Row title={"Top rated"} />
    </section>
  )
}

export default Home