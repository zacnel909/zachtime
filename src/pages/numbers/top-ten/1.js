import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"

const Page = () => {
  return (
    <main>
        <ChapterTitle enum={`6`} title={`one`}/>
        <ChapterBody>
            <p>
              1 is <Link to={`/ranks/sixth`}>sixth</Link>
            </p>
        </ChapterBody>
    </main>
  )
}

export default Page

export const Head = () => <title>1</title>
