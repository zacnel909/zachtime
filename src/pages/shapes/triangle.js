import * as React from "react"
import "../styles.sass"
import Triangle from "../../svgs/triangle"

const Page = () => (
  <main>
    <h1>triangle</h1>
    <Triangle/>
  </main>
)

export default Page

export const Head = () => <title>triangle</title>
