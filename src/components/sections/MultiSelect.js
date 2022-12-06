import React, { useState } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';



const selectOptions = [
    { value: "Generalized", label: "Generalized" },
    { value: "Flu", label: "Flu" },
    { value: "Hepatitis", label: "Hepatitis" },
    { value: "Breast_Cancer", label: "Breast Cancer" }
  ];

const animatedComponents = makeAnimated();


export default function MultiSelectComp(props) {
    const customStyles = {
        control: (base, state) => ({
          ...base,
          background: "#25282C",
          // match with the menu
          borderRadius: state.isFocused ? 3 : 9,
          // Overwrittes the different states of border
          borderColor: state.isFocused ? "#239BC0" : "#626364",
          // Removes weird border around container
          boxShadow: state.isFocused ? null : null,
          "&:hover": {
            // Overwrittes the different states of border
            borderColor: state.isFocused ? "#239BC0" : "#239BC0"
          }
        }),
        menu: base => ({
          ...base,
          // override border radius to match the box
          borderRadius: 0,
          // kill the gap
          marginTop: 0
        }),
        menuList: base => ({
          ...base,
          // kill the white space on first and last option
          padding: 0
        })
      };

      

    const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (options) => {
    setSelectedOptions(options);
    if(props.selected) {props.selected(options)}

  }; 

  return (
    <div style={{
        width:'100%',
        padding:10,
        alignSelf:'center',
        justifySelf:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        // backgroundColor:'red'
    }}>
    <div style={{
        width:'80%',
        padding:10,
        alignSelf:'center',
        justifySelf:'center',
        alignItems:'center',
        justifyContent:'center',
        fontSize:14,
        // backgroundColor:'red'
    }}>
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            // defaultValue={[selectOptions[1], selectOptions[2]]}
            isMulti
            options={selectOptions}
            styles={customStyles}
            onChange={handleChange}
            // className='selector'
            placeholder='select some diseases to practice on'
    />

    </div>
    
    </div>
  )
}
