import React from 'react'
import { MagicSpinner } from 'react-spinners-kit'

export default function Loading(props) {
  return (
    <div className="loading-container">
      <MagicSpinner
          size={50}
          color="white"
          className="loading"
          loading={props.loading}
      />
    </div>   
  )
}