import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => (
    <main>
        <ChapterTitle enum={'1'} title={'first'}/>
        <ChapterBody>
            <p>First is <Link to={`/numbers/top-ten/1`}>#1</Link></p>
        </ChapterBody>
    </main>
)

export const Head = () => <title>First</title>

export default Page
