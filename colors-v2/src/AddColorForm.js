import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";
import "./AddColorForm.css"

const AddColorForm = ({addColor}) =>{
    const navigate = useNavigate();

    const INITIAL_VALUES = {
        colorName: "",
        colorValue: "#000000"
    }

    const [formData, setFormData] = useState(INITIAL_VALUES);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addColor({
            colorName: formData.colorName,
            colorValue: formData.colorValue,
            id: uuid()
        })
        setFormData(INITIAL_VALUES);
        
        navigate("/colors");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName">Enter Color Name:</label>
            <input
                id="colorName"
                name="colorName"
                type="text"
                placeholder=""
                value={formData.colorName}
                onChange={handleChange}
            />
            <label htmlFor="colorValue">Enter Color Value:</label>
            <input
                id="colorValue"
                name="colorValue"
                type="color"
                value={formData.colorValue}
                placeholder=""
                onChange={handleChange}
            />
            <Link to="/colors">Go Back</Link>
            <button>Add Color</button>
        </form>
    )
}

export default AddColorForm;