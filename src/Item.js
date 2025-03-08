function Item({ item, onRemoveItem, onPackItem }) {
    const {id, description, quantity, packed } = item;
    return (
        <li className="Item">
            <input type="checkbox" value={packed} onChange={() => onPackItem(id)}/>
            <span style={packed ? { textDecoration: "line-through" } : {}}>
                {quantity} {description}
            </span>
            <button onClick={() => onRemoveItem(id)}>❌</button>
        </li>
    );
}

export default Item;
