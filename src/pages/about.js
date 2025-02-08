import * as React from "react"
import "./styles.sass"
import PageNavigation from "../components/PageNavigation"

const AboutPage = () => {
  return (
    <main>
      <h1>about</h1>
      <p>personal site for zach nelson</p>
      <PageNavigation toCenter='/'/>
    </main>
  )
}

export default AboutPage

export const Head = () => <title>about</title>
