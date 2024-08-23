import React from "react";
import { Dropdown } from "flowbite-react";

const FilterComponent = ({ handleTagSelect }) => {
    return (
        <Dropdown label="Filtrar" color="red">
            {['Acción', 'Aventura', 'Fantasía', 'Familia'].map(tag => (
                <Dropdown.Item key={tag} onClick={() => handleTagSelect(tag)}>{tag}</Dropdown.Item>
            ))}
        </Dropdown>
    );
};

export default FilterComponent;
