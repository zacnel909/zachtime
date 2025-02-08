import * as React from "react"
import "../styles.sass"
import ContentsItem from "../../components/ContentsItem"
import PageNavigation from "../../components/PageNavigation"

const IndexPage = () => {
  return (
    <main>
      <h1>shapes</h1>
      <ContentsItem enum={`1.`} label={`triangle`} to={'/shapes/triangle'}/>
      <PageNavigation toCenter='/'/>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>shapes</title>
