import React from 'react';

export default function Header(props){
  return (
    <>
      <img src={props.profileImg} alt="" />
      <h1>{props.username}</h1>
    </>
  )
}
