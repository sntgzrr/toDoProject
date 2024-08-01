import { useContext } from "react";
import { FilterContext } from "../context/filters";

// This custom hook provides the filtered tasks
export function useFilters() {
  // Using FilterContext to know the option selected by the user
  const { filters, setFilters } = useContext(FilterContext);

  // Method to filter the tasks based on the option selected 
  const filterTasks = (tasks) => {
    if (filters.filterBy === 'all') {
      return tasks;
    } else if (filters.filterBy === 'completed') {
      return tasks.filter(task => task.completed);
    } else if (filters.filterBy === 'pending') {
      return tasks.filter(task => !task.completed);
    }
  };

  return { filters, filterTasks, setFilters };
}
