import "./Stats.css";

function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    if (numItems === 0) return (
        <footer className="Stats">
            <p>Start adding items to your list!</p>
        </footer>
    );

    return (
        <footer className="Stats">
            
            {percentage === 100 ? (
                <p>✈️ You are all packed! Ready to go! ✈️</p>
            ) : (
                <p>
                    🧳{" "}
                    <em>{`You have ${numItems} items in your list, you are ${percentage}% packed.`}</em>{" "}
                    🧳
                </p>
            )}
        </footer>
    );
}

export default Stats;
