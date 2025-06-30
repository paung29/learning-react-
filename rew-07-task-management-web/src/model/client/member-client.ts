import { Links } from "react-router";
import type { MemberSearch } from "../input/member-search";
import type { MemberListItem } from "../output/member-list-item";
import { DUMMY_PAGE } from "../output/_common";


export async function searchMember(form: MemberSearch) {
    console.log(form)
    return{
        list : DUMMY_MEMBERS,
        pager : DUMMY_PAGE
    }
}

export async function findMemberEditForm(id:String) {
    
}


const DUMMY_MEMBERS:MemberListItem[] = [
    {
        id: 1,
        name: "Mike",
        position: "Programmer",
        entryAt: "2025-06-20",
        projects: 2,
        created: 20,
        onSchedule: 5,
        behind: 0,
        completed: 3,
        cancled: 0
    },
    {
        id: 2,
        name: "June",
        position: "System Engineer",
        entryAt: "2024-03-15",
        projects: 3,
        created: 10,
        onSchedule: 20,
        behind: 0,
        completed: 7,
        cancled: 3
    },
    {
        id: 3,
        name: "Cake",
        position: "Tester",
        entryAt: "2025-01-20",
        projects: 2,
        created: 0,
        onSchedule: 12,
        behind: 0,
        completed: 15,
        cancled: 0
    },
]