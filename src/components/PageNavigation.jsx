import * as React from "react"
import './component.styles.sass'

const PageNavigation = (props) => {
  const [rotation, setRotation] = React.useState(45)
  const [size, setSize] = React.useState(27)
  const onClickLeft = async () => {
    if (!props.onClickLeft) return
    setRotation(-45)
    await new Promise((resolve) => setTimeout(resolve, 301))
    props.onClickLeft()
  }
  const onClickCenter = async () => {
    if (!props.onClickCenter) return
    setSize(3)
    await new Promise((resolve) => setTimeout(resolve, 301))
    props.onClickCenter()
  }
  const onClickRight = async () => {
    if (!props.onClickLeft) return
    setRotation(135)
    await new Promise((resolve) => setTimeout(resolve, 301))
    props.onClickRight()
  }

  return (
    <svg
      className="page-navigation"
      width="126"
      height="42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        onClick={onClickLeft}
        className={props.onClickLeft && "navigation-button"}
        points="5.412,21.000 28.794,34.500 28.794,7.500"
        stroke={props.onClickLeft ? "black" : "lightgrey"}
        strokeWidth="3"
        fill='white'
      />
      <rect
        onClick={onClickCenter}
        className="navigation-button"
        stroke='black'
        strokeWidth="3"
        fill='white'
        width={size}
        height={size}
        x={63 - size / 2}
        y={21 - size / 2}
        transform={`rotate(${rotation} 63 21)`}
      />
      <polygon
        onClick={onClickRight}
        className="navigation-button"
        points="120.588,21.000 97.206,7.500 97.206,34.500"
        stroke="black"
        strokeWidth="3"
        fill='white'
      />
    </svg>
  )
}

export default PageNavigation
