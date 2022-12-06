import Multiselect from 'multiselect-react-dropdown';



import React, { useState } from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const colourOptions=[
    'red 1',
    'red 2',
    'red 3',
    'red 4',
]

const animatedComponents = makeAnimated();


export function MultiSelectComp1() {

    const state = {
        options: [{name: 'Option 1', id: 1},
        {name: 'Option 2', id: 2}
    ]
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
        width:400,
        padding:10,
        alignSelf:'center',
        justifySelf:'center',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    }}>

    <Multiselect
        
        options={state.options} // Options to display in the dropdown
        selectedValues={state.selectedValue} // Preselected value to persist in dropdown
        // onSelect={onSelect} // Function will trigger on select event
        // onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        placeholder="selcet a disease to practice on" // Property name to display in the dropdown options
        />
    </div>
    </div>
  )
}

export default function MultiSelectComp() {

    const [selectedCities1, setSelectedCities1] = useState(null);
    const [selectedCities2, setSelectedCities2] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
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
        width:400,
        padding:10,
        alignSelf:'center',
        justifySelf:'center',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red'
    }}>
        <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            // defaultValue={[colourOptions[1], colourOptions[2]]}
            isMulti
            options={colourOptions}
            style={{
                width:200,
                zIndex:11
            }}
    />

    
    </div>
    </div>
  )
}
