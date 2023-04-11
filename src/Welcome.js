import React from "react"

export function Welcome({name = "Johnny"}) {
    return (
        <div>
            <h2>Welcome, {name}</h2>
        </div>
    )
}