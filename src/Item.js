function Item({ item, onRemoveItem }) {
    const {id, description, quantity, packed } = item;
    return (
        <li className="Item">
            <span style={packed ? { textDecoration: "line-through" } : {}}>
                {quantity} {description}
            </span>
            <button onClick={() => onRemoveItem(id)}>❌</button>
        </li>
    );
}

export default Item;
