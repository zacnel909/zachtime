import * as React from "react"
import "../styles.sass"
import ContentsItems from "../../components/ContentsItems"

const contents = [
  { label: 'ten', to: '/numbers/10'},
  { label: 'three', to: '/numbers/3'},
]

const IndexPage = () => {
  return (
    <main>
      <h1>numbers</h1>
      <ContentsItems contents={contents} />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>numbers</title>
