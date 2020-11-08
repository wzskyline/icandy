import React, { useState, useEffect } from 'react';
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';

 
import '../node_modules/antd-mobile/dist/antd-mobile.css'; 
export default () => {
  const [list, setList] = useState([]);
   useEffect(() => { 
  },[]);
  return (
    <div> 
          <WingBlank size="lg"> 
          <WhiteSpace size="xl"/>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={26}
            min={0}
            max={30}
            onChange={()=>{}}
            onAfterChange={()=>{}} 
          />
        </WingBlank>
    </div>
  );
}
