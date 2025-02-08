import * as React from "react"
import "../../styles.sass"
import ChapterTitle from "../../../components/ChapterTitle"
import ChapterBody from "../../../components/ChapterBody"
import { Link } from "gatsby"
import PageNavigation from "../../../components/PageNavigation"

const Page = () => {
  return (
    <main>
      <ChapterTitle enum={`10`} title={`four`}/>
      <ChapterBody>
        <p>
          4 is <Link to='/ranks/last'>last</Link>
          <br/>
          4 hates word play
          <br/>
          and fears analogies
          <br/>
          4 believes in a <Link to='/numbers/top-ten/3'>3</Link> dimensional god
          <br/>
          4 is the original square
          <br/>
          and denies any relation to <Link to='/numbers/top-ten/2'>2</Link>
          <br/>
          4 is aware and optimistic
          <br/>
          but wants more out of her life
          <br/>
          4 loves a good reference
          <br/>
          as long it it doesn't include him
        </p>
      </ChapterBody>
      <PageNavigation toLeft='/numbers/top-ten/5' toCenter='/numbers'/>
    </main>
  )
}

export default Page

export const Head = () => <title>4</title>
