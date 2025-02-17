import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`2`} title={`three`}/>
      <ChapterBody>
        <p>
          3 is <Link to={`/ranks/second`}>second</Link>
          <br/>
          3 has a <Link to='/numbers/top-ten/9'>gay brother</Link>
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/10' toCenter='/numbers' toRight='/numbers/top-ten/9'/>
    </main>
  )
}

export default Page

export const Head = () => <title>3</title>
