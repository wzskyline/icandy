import React, { useState, useEffect } from 'react';
import styles from './index.css';

import InfiniteScroll from 'react-infinite-scroll-component';
export default () => {
  const [list, setList] = useState([]);
  const loadMore =()=>{
    console.log('loadMore()')
    var tmp =[...list]
    setList( tmp.concat(Array.from({length:10}))) 
  }
  const loadPre =()=>{
    console.log('loadPre()')
    setList( Array.from({length:10})) 
  }
  useEffect(() => {
      setList( Array.from({length:10})) 
  },[]);//让当监听某些值才更新
  return (
    <div>
       <InfiniteScroll doc="https://www.npmjs.com/package/react-infinite-scroll-component"
       dataLength={list.length}   
       hasMore={true} 
       next={loadMore}
       pullDownToRefresh 
       pullDownToRefreshThreshold={10}
       refreshFunction={ loadPre } 
       loader={<h4>Loading...</h4>}
       endMessage={  <p style={{textAlign: 'center'}}>  <b>Yay! You have seen it all</b> </p>}   
       pullDownToRefreshContent={ <h3 > Pull down to refresh</h3>}
       releaseToRefreshContent={  <h3 > Release to refresh</h3> }>
  {
    list.map((e,i)=>{
     return <div style={{ height:'100px'}} key={i}>{i}</div>
    })
  }
</InfiniteScroll>
    </div>
  );
}
