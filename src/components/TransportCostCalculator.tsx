import { useState } from "react";
import { months, weekDays } from "../utils/transportCost";

function TransportCostCalculator() {
  const now = new Date();

  const [cost, setCost] = useState<number>(0);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  const [fromToday, setFromToday] = useState<boolean>(false);

  const [selectMonth, setSelectMonth] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<number>(
    now.getMonth() + 1,
  );

  function toggleDay(day: number) {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((selectedDay) => selectedDay !== day)
        : [...prev, day],
    );
  }

  function getWorkDaysInMonth(year: number, month: number, workDays: number[]) {
    let count = 0;

    const daysInMonth = new Date(year, month, 0).getDate();

    const isCurrentMonth =
      year === now.getFullYear() && month === now.getMonth() + 1;

    const startDay = fromToday && isCurrentMonth ? now.getDate() : 1;

    for (let day = startDay; day <= daysInMonth; day++) {
      const date = new Date(year, month - 1, day);

      if (workDays.includes(date.getDay())) {
        count++;
      }
    }

    return count;
  }

  const monthToUse = selectMonth ? selectedMonth : now.getMonth() + 1;

  const numDays = getWorkDaysInMonth(
    now.getFullYear(),
    monthToUse,
    selectedDays,
  );

  const totalCost = cost * numDays;

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
      <h1 className="text-2xl font-bold mb-6">Transport Cost Calculator</h1>

      <div className="mb-6">
        <label
          htmlFor="cost"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Cost per day
        </label>

        <input
          type="number"
          id="cost"
          min="0"
          step="0.01"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-3">Work days</p>

        <div className="flex gap-3">
          {weekDays.map((day) => (
            <label
              key={day.value}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <span>{day.label}</span>

              <input
                type="checkbox"
                checked={selectedDays.includes(day.value)}
                onChange={() => toggleDay(day.value)}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6 flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={fromToday}
            onChange={(e) => setFromToday(e.target.checked)}
          />

          <span>From today</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectMonth}
            onChange={(e) => setSelectMonth(e.target.checked)}
          />

          <span>Select month</span>
        </label>
      </div>

      {selectMonth && (
        <div className="mb-6">
          <label
            htmlFor="month"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Month
          </label>

          <select
            id="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          >
            {months.map((month, index) => (
              <option key={month} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="border-t pt-4">
        <p>
          Work days: <span className="font-semibold">{numDays}</span>
        </p>

        <p className="text-xl font-bold mt-2">
          Total Cost: R{totalCost.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default TransportCostCalculator;
