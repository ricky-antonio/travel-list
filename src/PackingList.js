import "./PackingList.css";
import Item from "./Item";

const initialItems = [
    { id: 1, description: "Passport", quantity: 1, packed: true },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

function PackingList() {
    return (
        <div className="PackingList">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} />
                ))}
            </ul>
        </div>
    );
};

export default PackingList;
