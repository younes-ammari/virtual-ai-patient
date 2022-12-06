import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Bearer, { prompts } from '../../config/cohere';
import MultipleSelectChip from './MultiSelect';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Generator = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  
    const [error, setError] = useState('')
    const [value, setValue] = useState('')
    const [output, setOutput] = useState('here is your generated case')
    const [selected, setSelected] = useState([])
    const [data, setData] = useState({})
    const [message, setMessage] = useState("")
    const [selectedOptions, setselectedOptions] = useState([])

  
    // general prompt
    var prompt = 'Case 1: Her name is Andrea, she is feeling chills, a sore throat, and body aches. Her temperature is 98.7 and she is already taking some antibiotics.\nCase 2: His name is Ali, he says he woke up suffering from a runny nose and tightness in his chest and he took some Aspirin. His temperature is 95.0.\nCase 3: Her name is Pam, she is feeling a bit dizzy and has been nauseated. Her temperature is 99.3.\nCase 4: Her name is Rachel, she says she has had diarrhea for a couple of days. Her temperature is 98.8 and she has been vomiting as well.\nCase 5: The name is Christopher, he has chest pain, breathing pain, and coughing up green sputum. He has a temperature of 90.2 and he is not taking any medicine.\nCase 6: This is Dianna, she has a headache, nausea, body ache, loss of appetite, runny nose, and a sore throat. Her temperature is 105.7.\nCase 7:'
  
  
    const GenerateEvent =()=>{

        if (selectedOptions.length>0){
            var item = selectedOptions[Math.floor(Math.random()*selectedOptions.length)];
            var prompt = prompts[item.value];
        }
        else{
            var prompt = prompts.Generalized;
        }
        // console.log('her',prompt)
        // console.log('selectedOptions',selectedOptions)

        // var item = items[Math.floor(Math.random()*items.length)];
    // window.alert('clicked');

    // setOutput('generating ..');
    setValue('')
    setMessage('')

    setOutput('generating ...');

    const options = {
      method: 'POST',
      url: 'https://api.cohere.ai/generate',
      headers: {
        accept: 'application/json',
        'Cohere-Version': '2021-11-08',
        'content-type': 'application/json',
        authorization: 'Bearer '+Bearer
      },
      data: {
        prompt: prompt,
        model:'xlarge',
        max_tokens:100,
        temperature:0.9,
        k:0,
        p:0.75,
        frequency_penalty:0.2,
        presence_penalty:0,
        stop_sequences:["\n"],
        return_likelihoods:'NONE'
      }
    };
    
    axios
      .request(options)
      .then(function (response) {
        setTimeout(() => {
            setError("")
            // setMessage(error.message)
        }, 4000);
        // console.log(response.data.generations);
        // setData(response.data.generations);
        if (response.data.generations.length>0){
            const gen =  response.data.generations[0].text
            setValue(gen);
            // setOutput(gen);
            setMessage("What do you expect ?");
            setError("")
        //   console.log(response.data.generations);
        }

      })
      .catch(function (error) {
            setError(error.message)
            setOutput('failed !')
            // setMessage(error.message)
        
        console.error(error);
      });
  };

  

  const loadingSetter =()=>{


    if (error=="" && output=='generating ...'&&value.length<5 ){
        
    return(
        <div 
        style={{
            // paddingBottom:21, 
            // alignSelf:"center", 
            // justifySelf:'center',
            display:'flex',
            flexDirection:'row',
            justifyContent:"space-between"
            // paddingLeft:20,
            // paddingRight:20,
        }}
        >
        Generate new case 
        <img 
        src={require('../../assets/images/loading.gif')} 
        height={28} 
        width={28}
        style={{
            marginLeft:8
        }}

        />
        </div>

    )
    




}
    

    return "Generate new case"
        

  };







  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content reveal-from-bottom" data-reveal-delay="200">
            <h3 className="mt-0 mb-4 reveal-from-bottom" data-reveal-delay="200">
              Welcome to the <span className="text-color-primary">Virtual AI Patient</span>
            </h3>
            <div className="container-xs">
              <p className="m-0 mb-16 reveal-from-bottom" data-reveal-delay="400">
              easy and fast !
                </p>


            <MultipleSelectChip selected={sel=>setselectedOptions(sel)}/>
            
            {/* {selectedOptions.map(o => <p>{o.value}</p>)} */}
            
            <textarea 
                readOnly
                // readonly="readonly"
                className="input-generator gen-text"
                placeholder={output}
                value={value}
                />



                {!error && message.length>3 ? <p 
                // className="reveal-from-bottom" 
                style={{
                    fontSize:17,
                    fontWeight:"lighter",
                    marginBottom:30,
                    color:'#FF6060'
                }}
                // data-reveal-delay="800"
                >
                    {/* what do you expect !! */}
                    {message}
                </p> :
                    <p  
                    style={{
                        fontSize:17,
                        fontWeight:"lighter",
                        marginBottom:30,
                        color:'#FF6060'
                    }}
                    >{error}</p>
                    
                    
                
                     }  
              
              
              
              <div 
                // className="reveal-from-bottom" 
                data-reveal-delay="800">
                <ButtonGroup>
                  <Button tag="a" color="primary" 
                  wideMobile 
                  // href="https://cruip.com/"
                  // href="/"
                  onClick={GenerateEvent}
                  >
                    {loadingSetter()}
                  </Button>
            
                </ButtonGroup>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

Generator.propTypes = propTypes;
Generator.defaultProps = defaultProps;

export default Generator;