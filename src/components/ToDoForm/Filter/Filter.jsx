import "./Filter.css";

const Filter = () => {
  return (
    <div className="tabs">
      <button className="tabs__item tabs__item_active">Список </button>
      <button className="tabs__item">Напоминание</button>
      <button className="tabs__item">Ещё</button>
    </div>
  );
};

export default Filter;
