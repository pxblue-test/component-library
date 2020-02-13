import React from 'react';
// @ts-ignore
import iphone from '../assets/iphone-x-flat-buttons.svg';

export const wrap = (img: any) => {
   return (
      <div style={{height: '100%', width: '100%', position: 'relative'}}>
         <img src={iphone} style={{zIndex: 2, height: '100%', width: '100%', position: 'absolute'}} />
         <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', height: '100%'}}>
            <img style={{position: 'absolute', top: 0, bottom: 0, margin: 'auto', height: '82%'}} src={img} />
         </div>
      </div>
   );
};
