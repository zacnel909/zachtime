import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`4`} title={`two`}/>
      <ChapterBody>
        <p>
          2 is <Link to={`/ranks/fourth`}>fourth</Link>
          <br/>
          2 is the liar
          <br/>
          2 loves talking
          <br/>
          2 believes he is god
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/9' toCenter='/numbers' toRight='/numbers/top-ten/8'/>
    </main>
  )
}

export default Page

export const Head = () => <title>2</title>
