import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "animal", label: "animal" },
    { value: "law & justice", label: "law & justice" },
    { value: "war & peace", label: "war & peace" },
    { value: "emergency", label: "emergency" },
    { value: "hospitals & medicine", label: "hospitals & medicine" },
    { value: "education", label: "education" },
    { value: "environment", label: "environment" },
    { value: "sports", label: "sports" },
    { value: "others", label: "others" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(products.filter(item => item.category ===selectedOption.value))
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
