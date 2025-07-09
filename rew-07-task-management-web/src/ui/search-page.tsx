import type React from "react"
import { useState } from "react"
import type { PageResult } from "../model/output/_common"
import { SearchResultContext } from "../model/context/search-result-context"
import Page from "./page"
import Pagination from "./pagination"

export default function SearchPage({icon, title, searchFrom, children} : SearchPageProperties){

    const [result, setResult] = useState<PageResult<unknown>>({list : []})

    return(
        <SearchResultContext.Provider value={[result, setResult]}>
            <Page title={title} icon={icon}>
                <section>
                    {searchFrom}
                </section>

                <section className="mt-3">
                    {children}
                </section>

                <section>
                    <Pagination />
                </section>
            </Page>
        </SearchResultContext.Provider>
    )
}


type SearchPageProperties = {
    title : string
    icon ?: string
    searchFrom ?: React.ReactNode
    children ?: React.ReactNode
}