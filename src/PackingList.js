import "./PackingList.css";
import Item from "./Item";

function PackingList({ items, onRemoveItem, onPackItem, onClearList }) {
    return (
        <div className="PackingList">
            <ul>
                {items.map((item, i) => (
                    <Item
                        item={item}
                        key={i}
                        onRemoveItem={onRemoveItem}
                        onPackItem={onPackItem}
                    />
                ))}
            </ul>

            <div className="actions">
                
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    );
}

export default PackingList;
