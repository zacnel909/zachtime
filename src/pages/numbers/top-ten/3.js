import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"

const Page = () => {
  return (
    <main>
        <ChapterTitle enum={`2`} title={`three`}/>
        <ChapterBody>
            <p>
              3 is <Link to={`/ranks/second`}>second</Link>
              <br/>
              3 is a question
            </p>
        </ChapterBody>
    </main>
  )
}

export default Page

export const Head = () => <title>10</title>
