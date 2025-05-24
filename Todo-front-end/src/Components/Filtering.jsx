import { useEffect, useState } from "react";

export const Filtering = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    time: "all",
    priority: "all",
    status: "",
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const handleOnChangeTime = (e) => {
    setFilters((prev) => {
      return { ...prev, time: e.target.value };
    });
  };

  const handleOnChangePriority = (e) => {
    setFilters((prev) => {
      return { ...prev, priority: e.target.value };
    });
  };

  const handleOnChangeStatus = (e) => {
    setFilters((prev) => {
      return { ...prev, status: e.target.value };
    });
  };
  return (
    <>
      <div className="flex gap-2 py-3 mb-4">
        <select
          className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer"
          onChange={(e) => handleOnChangeTime(e)}
          value={filters.time}
        >
          <option value="all">All Time</option>
          <option value="today">Today</option>
          <option value="week">This week</option>
        </select>
        <select
          className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer"
          onChange={(e) => handleOnChangePriority(e)}
          value={filters.priority}
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select
          className="text-black m-4 p-2 border border-purple-600 rounded focus:ring-2 focus:ring-purple-400 cursor-pointer"
          onChange={(e) => handleOnChangeStatus(e)}
          value={filters.status}
        >
          <option value="">All Statuses</option>
          <option value="true">Completed</option>
          <option value="false">Incomplete</option>
        </select>
      </div>
    </>
  );
};
