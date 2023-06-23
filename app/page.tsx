import ListArticle from "./components/article/ListArticle";
import { SSRListArticle } from "./components/article/SSRListArticle";

export default function Page() {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mx-auto">
                <div className="col-span-9">
                    {/* <ListArticle/> */}
                    <SSRListArticle />
                </div>
            </div>
        </>
    )
}