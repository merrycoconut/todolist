import "./Filter.css";

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
    <div className="filter-button-container">
      <button className="filter-button" onClick={showAll}>
        All
      </button>
      <button className="filter-button" onClick={showActive}>
        Active
      </button>
      <button className="filter-button" onClick={showCompleted}>
        Completed
      </button>
    </div>
  );
}
