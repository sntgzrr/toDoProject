import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

// This component creates the Filters element
export function Filters (){

    // Filter states
    const { setFilters } = useFilters()
    const filterId = useId()

    // Method to handle the Filter selected by the user
    const handleChangeFilter = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            filterBy: event.target.value
        }))
    }

    return(
        <section className="filters">
            <div>
                <select  id={filterId} onChange={handleChangeFilter}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </section>
    )
}
