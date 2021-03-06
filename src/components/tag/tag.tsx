import React from 'react';
import '../tag/tag.css'
import './X.svg';

type Props = {
    label :string
}


export const Tag =(props:Props)=>{
    return(
        <><div className="wrapper">
            <button className="tag_button">
                <div className="tag_text--wrapper">
               <span className="tag_text"> {props.label} </span>
              <span className="tag_span"> <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.27933 8.87179C-0.09311 9.24424 -0.0931098 9.84809 0.27933 10.2205C0.651769 10.593 1.25561 10.593 1.62805 10.2205L4.99994 6.84861L8.37195 10.2207C8.74439 10.5931 9.34823 10.5931 9.72067 10.2207C10.0931 9.84822 10.0931 9.24437 9.72067 8.87192L6.34866 5.49986L9.7204 2.12808C10.0928 1.75563 10.0928 1.15178 9.7204 0.779334C9.34795 0.406889 8.74411 0.406889 8.37167 0.779334L4.99994 4.15112L1.62833 0.779462C1.25589 0.407017 0.652045 0.407017 0.279606 0.779462C-0.0928338 1.15191 -0.0928341 1.75576 0.279606 2.12821L3.65121 5.49986L0.27933 8.87179Z" fill="white" fill-opacity="0.88"/>
</svg></span> 
               </div>
            </button>
        </div>
         </>
    )
};