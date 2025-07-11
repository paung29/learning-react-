import { useForm } from "react-hook-form";
import SearchPage from "../../ui/search-page";
import type { TaskSearch } from "../../model/input/task-search";
import { useSearchResultSetter } from "../../model/context/search-result-context";

export default function TaskListComponent(){
    return(
        <SearchPage title="Task Management" icon="bi-stack" searchFrom={<SearchForm />}>
            <SearchResult/>
        </SearchPage>
    )
}

function SearchForm(){

    const {register, handleSubmit} = useForm<TaskSearch>()
    const setResult = useSearchResultSetter()

    async function search(form:TaskSearch) {
        const result = searchTas
    }

    return(
        <></>
    )
}

function SearchResult(){
    return(
        <></>
    )
}