import { CarDetails } from "./CarDetails";

export function App() {
    return (
        <div>
            <CarDetails initialData={{
                model: "lamborghini gallardo",
                year: "2016",
                color: "yellow",
            }}/>
        </div>
    )
}