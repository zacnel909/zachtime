import * as React from "react"
import "../styles.sass"
import ContentsItem from "../../components/ContentsItem"

const IndexPage = () => {
  return (
    <main>
      <h1>shapes</h1>
      <ContentsItem enum={`1.`} label={`triangle`} to={'/shapes/triangle'}/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>shapes</title>
