import React from "react";

function Person({ name, searchTerm, onClick }) {

    const nameParts = name.split(new RegExp(`(${searchTerm})`)); // Optional: Add 'i' flag to make it case insensitive

    return (
        <div>
            <h2 onClick={onClick}>
                {nameParts.map((part, index) => (
                    <span
                        key={index}
                        style={
                            part.toLowerCase() === searchTerm.toLowerCase()
                                ? { color: "red" }
                                : {}
                        }
                    >
                        {part}
                    </span>
                ))}
            </h2>
        </div>
    );
}

export default Person;
