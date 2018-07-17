import React from 'react'

export default function Title(props){
  const style = {
    fontWeight: 'bold', 
  };
  return(
    <h1 style={style}> {props.title} </h1>
  );
}
