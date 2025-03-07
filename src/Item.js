function Item({ item }) {
    const { description, quantity, packed } = item;
    return (
        <li className="Item">
            <span style={packed ? { textDecoration: "line-through" } : {}}>
                {quantity} {description}
            </span>
            <button>❌</button>
        </li>
    );
}

export default Item;
