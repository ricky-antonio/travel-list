import "./PackingList.css";
import Item from "./Item";

function PackingList({items, onRemoveItem}) {
    return (
        <div className="PackingList">
            <ul>
                {items.map((item, i) => (
                    <Item item={item} key={i} onRemoveItem={onRemoveItem}/>
                ))}
            </ul>
        </div>
    );
};

export default PackingList;
