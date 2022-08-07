import React from 'react'

const subscribe = () => {
  return (
	<div className="body">
    <div className="flex">
      <div className="subscribe">
        <input type="email" id="email" placeholder="EMAIL ADDRESS"/>
        <div>
          <button disabled={true}>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default subscribe