import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => (
    <main>
        <ChapterTitle enum={'5'} title={'fifth'}/>
        <ChapterBody>
            <p>Fifth is <Link to={`/numbers/top-ten/5`}>#5</Link></p>
        </ChapterBody>
    </main>
)

export const Head = () => <title>Fifth</title>

export default Page
