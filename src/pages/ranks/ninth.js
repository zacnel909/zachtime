import * as React from "react"
import "../styles.sass"
import ChapterTitle from "../../components/ChapterTitle"
import ChapterBody from "../../components/ChapterBody"
import { Link } from "gatsby"


const Page = () => (
    <main>
        <ChapterTitle enum={'9'} title={'ninth'}/>
        <ChapterBody>
            <p>Ninth is <Link to={`/numbers/top-ten/9`}>#9</Link></p>
        </ChapterBody>
    </main>
)

export const Head = () => <title>Ninth</title>

export default Page
