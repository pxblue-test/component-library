import {StoryFnReactReturnType} from "@storybook/react/dist/client/preview/types";
import React from 'react';
import ReactMarkdown from "react-markdown";
// @ts-ignore
import iphone from '../assets/iphone-x-flat-buttons.svg';

export const wrapImg = (img: any): StoryFnReactReturnType => {
   const imgObj = new Image();
   imgObj.src = img;
   imgObj.onload = () => {
      // TODO Load image after it loads.
     // document.getElementById('populate-me').append(...)
   };
   return <div id={'wrapper'} style={{height: '100%', width: '100%', position: 'relative'}}>
      <img src={iphone} style={{zIndex: 2, height: '100%', width: '100%', position: 'absolute'}} />
      <div id='populate-me' style={{display: 'flex', justifyContent: 'center', alignContent: 'center', height: '100%'}}>
         <img style={{position: 'absolute', top: 0, bottom: 0, margin: 'auto', height: '82%'}} src={img} />
      </div>
   </div>
};

export const wrapMd = (md: any): StoryFnReactReturnType => (
   <div id={'api-wrapper'}>
      <ReactMarkdown source={md} />);
   </div>
);
