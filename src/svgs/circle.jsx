import * as React from "react"
import "./svg.styles.sass"

const Circle = (props) => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle
            className={props.pathClass || ''}
            cx="100" cy="100" r="50" fill="#3498db"
        />
    </svg>
  )
}

export default Circle
