import React from 'react';
import './App.css';
import {Button} from './components/button/button';
import {ButtonPrimary} from './components/button/button';
import {ButtonSecondary} from './components/button/button';
import {Tag} from './components/tag/tag';
import {TagNew} from './components/tagNew/tag_new'



const App = () =>{

  
  return (
    <div>
  <div>
    <Button
    label="aaaaaaa"
    />
    <ButtonPrimary
    label="aaaaaaa"
    />
    <ButtonSecondary
    label="----------"
    />
  </div>
  <div>
    <Tag
    label= 'Tag'
    />
<br/>
    <TagNew
    label='Tag'
    />
  </div>
  </div>
   
  );
}

export default App;
