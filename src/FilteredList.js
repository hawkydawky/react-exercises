import { useMemo } from "react"

export function FilteredList({ list }) {

    function filter18(toFilter) {
        return toFilter.filter(ele => ele.age>18)
    }

    const filteredList = useMemo(() => filter18(list), [list])

    return (
        <ul>{filteredList.map((ele, index) => <li key={index}>Name: {ele.name} / Id: {ele.id} / Age: {ele.age}</li>)}</ul>
    )
}
