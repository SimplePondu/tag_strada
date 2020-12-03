import React from 'react';
import '../button/button.css'

type Props = {
    label :string
}


export const Button =(props:Props)=>{
    return(
        <><div>
            <button className="button">
               <span className="label_text"> {props.label} </span>
            </button>
        </div>
         </>
    )
};

export const ButtonPrimary =(props:Props)=>{
    return(
        <><><div>
            <button className="button button_primary">
               <span className="label_text label_text--white"> {props.label} </span>
            </button>
        </div>
       </></>
    )
};

export const ButtonSecondary =(props:Props)=>{
    return(
        <><><div>
           <button className="button button_secondary">
                <span className="label_text"> {props.label} </span>
            </button>
        </div>
       </></>
    )
};