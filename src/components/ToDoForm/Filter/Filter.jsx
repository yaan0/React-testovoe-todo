import "./Filter.css";

const Filter = ({ itemActive, setItemActive }) => {
  return (
    <div className="tabs">
      <button
        className={`tabs__item ${itemActive === 1 && "tabs__item-active"}`}
        onClick={() => setItemActive(1)}
      >
        Список
      </button>
      <button
        className={`tabs__item ${itemActive === 2 && "tabs__item-active"}`}
        onClick={() => setItemActive(2)}
      >
        Напоминание
      </button>
      <button
        className={`tabs__item ${itemActive === 3 && "tabs__item-active"}`}
        onClick={() => setItemActive(3)}
      >
        Ещё
      </button>
    </div>
  );
};

export default Filter;
