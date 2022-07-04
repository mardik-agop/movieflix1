import React from 'react'

const FreeTrail = () => {
  return (
    <div className='free-trail'>
      <div className='container fre-trail-container'>
        <div className='info'>
          <h2>TRAIL START FIRST 30 DAYS</h2>
          <p>Enter your email to create or restart your membership.</p>
        </div>
        <form>
          <input type="text" placeholder='Enter tour email...'/>
          <button>GET STARTED</button>
        </form>
      </div>
    </div>
  )
}

export default FreeTrail