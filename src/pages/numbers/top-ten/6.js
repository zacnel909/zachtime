import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`8`} title={`six`}/>
      <ChapterBody>
        <p>
          6 is <Link to={`/ranks/eighth`}>eighth</Link>
          <br/>
          6 is the earth
          <br/>
          6 is afraid of <Link to='/numbers/top-ten/7'>7</Link>
          <br/>
          because <Link to='/numbers/top-ten/7'>7</Link> has a huge ego
          <br/>
          6 is composed
          <br/>
          6 is confused by her awareness
          <br/>
          6 loves space
          <br/>
          but does not want to go there
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/7' toCenter='/numbers' toRight='/numbers/top-ten/5'/>
    </main>
  )
}

export default Page

export const Head = () => <title>6</title>
