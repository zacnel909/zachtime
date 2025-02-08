import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`9`} title={`five`}/>
      <ChapterBody>
        <p>
          5 is <Link to='/ranks/second'>second</Link> to <Link to='/ranks/last'>last</Link>
          <br/>
          which makes him insecure
          <br/>
          5 does not know much about himself
          <br/>
          sometimes 5 feels even
          <br/>
          because 5 is not <i>that</i> odd
          <br/>
          5 is <b>bold</b> but not <b>brave</b>
          <br/>
          5 has space to experiment
          <br/>
          5 resents his association with <Link to='/numbers/top-ten/9'>9</Link>
          <br/>
          and is afraid to get a job
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/6' toCenter='/numbers' toRight='/numbers/top-ten/4'/>
    </main>
  )
}

export default Page

export const Head = () => <title>5</title>
