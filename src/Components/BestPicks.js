import React from 'react'
import best_pick from '../assets/best_pick.png'
import {MdConnectedTv} from 'react-icons/md'
import {BiSlideshow} from 'react-icons/bi'
import {AiOutlineDatabase, AiOutlinePlaySquare} from 'react-icons/ai'

const BestPicks = () => {
  return (
    <div className='best-picks'>
      <div className='container best-picks-container'>
        <div className='left'>
          <img src={best_pick}/>
        </div>
        <div className='right'>
          <h1>Best pick for hassle-free <br/> <span>streaming</span> experience</h1>
          <div className='streaming'>

            <section>
            <div className='streaming-box'>
              <span><MdConnectedTv/></span>
              <div className='streaming-info'>
                <h3 style={{color: "#333"}}>Access while travelinh</h3>
                <p>Keep access to your entertainment content while roaming the <br/> world.Pick from thousands.</p>
              </div>
            </div>

            <div className='streaming-box'>
              <span><BiSlideshow/></span>
              <div className='streaming-info'>
                <h3 style={{color: "#333"}}>Streaming</h3>
                <p>Pause for snacks, not buffering. Stream smoothly with our <br/> lightning-fast NordLynx protocol network.</p>
              </div>
            </div>

            <div className='streaming-box'>
              <span><AiOutlineDatabase/></span>
              <div className='streaming-info'>
                <h3 style={{color: "#333"}}>AStay secure</h3>
                <p>Securely access and enjoy your favorite content, even on <br/> public Wi-Fi. Your connection.</p>
              </div>
            </div>

            <div className='streaming-box'>
              <span><AiOutlinePlaySquare/></span>
              <div className='streaming-info'>
                <h3 style={{color: "#333"}}>Access while travelinh</h3>
                <p>Keep access to your entertainment content while roaming the <br/> world.Pick from thousands.</p>
              </div>
            </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BestPicks