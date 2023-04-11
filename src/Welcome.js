import React from "react"

export function Welcome(props) {
    return (
        <div>
            <h2>Welcome, {props.name || "Johnny"}</h2>
        </div>
    )
}