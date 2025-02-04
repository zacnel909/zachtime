import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => (
    <main>
        <ChapterTitle enum={'6'} title={'sixth'}/>
        <ChapterBody>
            <p>Sixth is <Link to={`/numbers/top-ten/6`}>#6</Link></p>
        </ChapterBody>
    </main>
)

export const Head = () => <title>Sixth</title>

export default Page
