import * as React from "react"
import "../styles.sass"
import ContentsItems from "../../components/ContentsItems"

const contents = [
  { label: 'wordbowl', to: 'http://wordbowl.xyz'},
]

const IndexPage = () => {
  return (
    <main>
      <h1>games</h1>
      <ContentsItems contents={contents} />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>games</title>
