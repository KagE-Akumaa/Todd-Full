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
    <div className="flex flex-wrap items-center gap-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm mb-6 mt-3 transition-all">
      {/* Time Filter */}
      <select
        className="min-w-[150px] p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        onChange={handleOnChangeTime}
        value={filters.time}
      >
        <option value="all">All Time</option>
        <option value="today">Today</option>
        <option value="week">This week</option>
      </select>

      {/* Priority Filter */}
      <select
        className="min-w-[150px] p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        onChange={handleOnChangePriority}
        value={filters.priority}
      >
        <option value="all">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      {/* Status Filter */}
      <select
        className="min-w-[150px] p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        onChange={handleOnChangeStatus}
        value={filters.status}
      >
        <option value="">All Statuses</option>
        <option value="true">Completed</option>
        <option value="false">Incomplete</option>
      </select>
    </div>
  );
};
