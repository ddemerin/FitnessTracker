import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'

export function Home() {
  return (
    <>
      <div className="main-home-section">
        <h1 className="title">Get Fit!</h1>
        <div className="links">
          <Link to="/workout" className="call-to-action">
            Create a Workout
          </Link>
          <Link to="/">View Progress</Link>
        </div>
      </div>
    </>
  )
}
