/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// This context provides the filters options
export const FilterContext = createContext()

export function FiltersProvider ({children}){
    // Initializing filters
    const [filters, setFilters] = useState({
        filterBy:'all'
    })

    return(
        // Creating the provider of FilterContext
        <FilterContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}
