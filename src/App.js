import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passport", quantity: 1, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
    const [items, setItems] = useState(initialItems);

    function handleAddItems(newItem) {
        setItems((items) => [...items, newItem]);
    }

    function handleRemoveItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handlePackItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    return (
        <div className="App">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onRemoveItem={handleRemoveItem}
                onPackItem={handlePackItem}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
