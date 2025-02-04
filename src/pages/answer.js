import * as React from "react"
import "./styles.sass"
import ChapterTitle from "../components/ChapterTitle"
import ChapterBody from "../components/ChapterBody"

const Page = () => {
  return (
    <main>
        <ChapterTitle enum={`42`} title={`answer`}/>
        <ChapterBody>
            <p>
              10
            </p>
        </ChapterBody>
    </main>
  )
}

export default Page

export const Head = () => <title>answer</title>
