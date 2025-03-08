import { useState } from "react";
import "./Form.css";
import _uniqueId from "lodash/uniqueId";

function Form({onAddItems}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {        
        e.preventDefault();
        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: _uniqueId("item-"),
        };
        
        onAddItems(newItem);

        setDescription("")
        setQuantity(1);
    }

    return (
        <form className="Form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Add an item"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}

export default Form;
