import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`6`} title={`one`}/>
      <ChapterBody>
        <p>
          1 is <Link to={`/ranks/sixth`}>sixth</Link>
          <br/>
          1 and <Link to='/numbers/top-ten/7'>7</Link> are sisters
          <br/>
          1 is Johnny Bananas
          <br/>
          1 trusts <Link to='/numbers/top-ten/2'>2</Link>
          <br/>
          1 loves to count
          <br/>
          Everyone has been 1
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/8' toCenter='/numbers' toRight='/numbers/top-ten/7'/>
    </main>
  )
}

export default Page

export const Head = () => <title>1</title>
