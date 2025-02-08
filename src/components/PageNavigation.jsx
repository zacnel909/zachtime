import * as React from "react"
import './component.styles.sass'
import { navigate } from "gatsby"

const PageNavigation = (props) => {
  const { toLeft, toCenter, toRight } = props
  const [rotation, setRotation] = React.useState(45)
  const [size, setSize] = React.useState(27)
  const onClickLeft = async () => {
    if (!toLeft) return
    setRotation(-45)
    await new Promise((resolve) => setTimeout(resolve, 301))
    navigate(toLeft)
  }
  const onClickCenter = async () => {
    if (!toCenter) return
    setSize(3)
    await new Promise((resolve) => setTimeout(resolve, 301))
    navigate(toCenter)
  }
  const onClickRight = async () => {
    if (!toRight) return
    setRotation(135)
    await new Promise((resolve) => setTimeout(resolve, 301))
    navigate(toRight)
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
        className={toLeft && "navigation-button"}
        points="5.412,21.000 28.794,34.500 28.794,7.500"
        stroke={toLeft ? "black" : "lightgrey"}
        strokeWidth="3"
        fill='white'
      />
      <rect
        onClick={onClickCenter}
        className={toCenter && "navigation-button"}
        stroke={toCenter ? "black" : "lightgrey"}
        strokeWidth="3"
        fill='white'
        width={size}
        height={size}
        x={63 - size / 2}
        y={21 - size / 2}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: '63px 21px',
        }}
      />
      <polygon
        onClick={onClickRight}
        className={toRight && "navigation-button"}
        points="120.588,21.000 97.206,7.500 97.206,34.500"
        stroke={toRight ? "black" : "lightgrey"}
        strokeWidth="3"
        fill='white'
      />
    </svg>
  )
}

export default PageNavigation
