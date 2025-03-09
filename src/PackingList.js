import "./PackingList.css";
import Item from "./Item";
import { useState } from "react";

function PackingList({ items, onRemoveItem, onPackItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description")
        sortedItems = [...items].sort((a, b) =>
            a.description.localeCompare(b.description)
        );
    if (sortBy === "packed") sortedItems = [...items].sort((a,b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="PackingList">
            <ul>
                {sortedItems.map((item, i) => (
                    <Item
                        item={item}
                        key={i}
                        onRemoveItem={onRemoveItem}
                        onPackItem={onPackItem}
                    />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort packed status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    );
}

export default PackingList;
