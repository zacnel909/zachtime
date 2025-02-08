import * as React from "react"
import "./styles.sass"
import ChapterTitle from "../components/ChapterTitle"
import ChapterBody from "../components/ChapterBody"
import PageNavigation from "../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`42`} title={`answer`}/>
      <ChapterBody>
          <p>
            10
          </p>
      </ChapterBody>
      <PageNavigation toCenter='/'/>
    </main>
  )
}

export default Page

export const Head = () => <title>answer</title>
