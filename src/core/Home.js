import React from 'react'
import Base from '../components/Base'

const Home = () => {
    return (
        <Base>
        <div className='text-white'>
        <div
        id="retainable-rss-embed"
        data-rss="https://medium.com/feed/ieeesrmist"
        data-maxcols="3"
        data-layout="grid"
        data-poststyle="modal"
        data-readmore=" "
      ></div>
      </div>
      </Base>
    )
}

export default Home
