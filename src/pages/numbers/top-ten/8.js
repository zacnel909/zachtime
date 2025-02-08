import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`5`} title={`eight`}/>
      <ChapterBody>
        <p>
          8 is <Link to={`/ranks/fifth`}>fifth</Link>
          <br/>
          8 has the same birthday as <Link to='/numbers/top-ten/2'>2</Link>
          <br/>
          8 believes in a <Link to='/numbers/top-ten/4'>4</Link> dimensional god
          <br/>
          8 is emotional
          <br/>
          8 is guilty
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/2' toCenter='/numbers' toRight='/numbers/top-ten/1'/>
    </main>
  )
}

export default Page

export const Head = () => <title>8</title>
