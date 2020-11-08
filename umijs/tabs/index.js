import React, { useState, useEffect } from 'react';
import styles from './index.css';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
const tabs = [
  { title: <Badge text={'3'}>First Tab</Badge> },
  { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  { title: <Badge dot>Third Tab</Badge> },
];

const tabs2 = [
  { title: '1 Tab', key: 't1' },
  { title: '2 Tab', key: 't2' },
  { title: '3 Tab', key: 't3' },
];
const style={ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }
const TabPane = Tabs.TabPane;
import '../node_modules/antd-mobile/dist/antd-mobile.css'; 
export default () => {
  const [list, setList] = useState([]);
   useEffect(() => { 
  },[]);
  return (
    <div> 
        <Tabs tabs={tabs}
      initialPage={1}
      tabBarPosition="top"
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={ style }>
         
      <Tabs tabs={tabs2}
      initialPage={'t2'}
      tabBarPosition="left"
      tabDirection="vertical"
    >
      <div style={style}>
        Content of first tab
      </div>
      <div style={style}>
        Content of second tab
      </div>
      <div style={style}>
        Content of third tab
      </div>
    </Tabs>

      </div>
      <div style={style}>
        Content of second tab
      </div>
      <div style={style}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
    <WingBlank>
    <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={0}
          slideWidth={1}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => { ()=>{ console.log('afterChange()') } }}
        >
          <img
                src={`https://www.baidu.com/img/flexible/logo/pc/result.png`}
                alt=""
                style={{ width: '100vw',height:'200px' ,verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
              <img
                src={`https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg`}
                alt=""
                style={{ width: '100vw',height:'200px' ,verticalAlign: 'top' }}
                onLoad={() => { 
                  window.dispatchEvent(new Event('resize'));
                   
                }}
              />
     </Carousel>
    </WingBlank>
    <Carousel className="my-carousel"
      vertical
      dots={false}
      dragging={false}
      swiping={false}
      autoplay
      infinite
      speed={200}
      autoplayInterval={300}
      resetAutoplay={false}
    >
      {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
        <div className="v-item" key={type}>{type}</div>
      ))}
    </Carousel>
    </div>
  );
}
