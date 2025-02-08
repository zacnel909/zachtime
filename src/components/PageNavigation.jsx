import * as React from "react"
import './component.styles.sass'
import { navigate } from "gatsby"

const PageNavigation = (props) => {
  const { toLeft, toCenter, toRight } = props
  const [rotation, setRotation] = React.useState(45)
  const [size, setSize] = React.useState(42)
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
      width="196"
      height="65.33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        onClick={onClickLeft}
        className={toLeft && "navigation-button"}
        points="8.42,32.67 44.79,53.67 44.79,11.67"
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
        x={98 - size / 2}
        y={32.67 - size / 2}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: '98px 32.67px',
        }}
      />
      <polygon
        onClick={onClickRight}
        className={toRight && "navigation-button"}
        points="187.58,32.67 151.21,11.67 151.21,53.67"
        stroke={toRight ? "black" : "lightgrey"}
        strokeWidth="3"
        fill='white'
      />
    </svg>
  )
}

export default PageNavigation
