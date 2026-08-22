type FilterProps = {
  showActive: () => void;
  showCompleted: () => void;
  showAll: () => void;
};
export default function Filter({
  showActive,
  showCompleted,
  showAll,
}: FilterProps) {
  return (
    <div className="filter-button">
      <button onClick={showAll}>All</button>
      <button onClick={showActive}>Active</button>
      <button onClick={showCompleted}>Completed</button>
    </div>
  );
}
