import React, { useContext, useState } from "react";
import Person from "./person";
import { PersonContext } from "../page";

function DetailInfo({ people }) {
    if (people) {
        return (
            <div style={{ "padding-left": "100px" }}>
                <h2>name: {people.name}</h2>
                <h2>age: {people.age}</h2>
                <h2>job: {people.job}</h2>
            </div>
        )
    }
    return null
}

function PeopleList() {
    const [searchTerm, setSearchTerm] = useState("");

    const people = useContext(PersonContext)

    const filteredPeople = people.filter((person) =>
        person.name.includes(searchTerm) // Use toLowerCase() to make it case insensitive
    );

    const [pressedPeople, setPressedPeople] = useState(null);

    return (
        <div style={{
            display: 'flex',
        }}>
            <div >
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                {filteredPeople.map((person, index) => (
                    <div key={index}>
                        <Person name={person.name} searchTerm={searchTerm} onClick={() => setPressedPeople(person)} />
                    </div>
                ))}
            </div>
            <DetailInfo people={pressedPeople} />
        </div >
    );
}

export default PeopleList;
