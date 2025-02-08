import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`3`} title={`nine`}/>
      <ChapterBody>
        <p>
          9 is <Link to={`/ranks/third`}>third</Link>
          <br/>
          9 lives in <Link to='/numbers/top-ten/3'>3</Link> dimensions
          <br/>
          but thinks in <Link to='/numbers/top-ten/2'>2</Link>
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/3' toCenter='/numbers' toRight='/numbers/top-ten/2'/>
    </main>
  )
}

export default Page

export const Head = () => <title>9</title>
