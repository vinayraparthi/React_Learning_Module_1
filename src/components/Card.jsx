import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://imgs.search.brave.com/UcN6Raf0oCMx4ehHphf04_S0olWKM0NesNt8oGLM34I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/cm9ncmFtbWluZy1i/YWNrZ3JvdW5kLXdp/dGgtcGVyc29uLXdv/cmtpbmctd2l0aC1j/b2Rlcy1jb21wdXRl/cl8yMy0yMTUwMDEw/MTI1LmpwZz9zaXpl/PTYyNiZleHQ9anBn" alt=""  width={333} style={{border:"2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
