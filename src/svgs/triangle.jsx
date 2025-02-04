import * as React from "react"

const Triangle = (props) => {
  return (
    <svg width="42" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon
            className={props.polygonClass || ''}
            points="21,5.412 7.5,28.794 34.5,28.794"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
        />
    </svg>
  )
}

export default Triangle
