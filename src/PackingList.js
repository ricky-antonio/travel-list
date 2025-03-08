import "./PackingList.css";
import Item from "./Item";

function PackingList({items, onRemoveItem, onPackItem}) {
    return (
        <div className="PackingList">
            <ul>
                {items.map((item, i) => (
                    <Item item={item} key={i} onRemoveItem={onRemoveItem} onPackItem={onPackItem}/>
                ))}
            </ul>
        </div>
    );
};

export default PackingList;
