import React from 'react';
import bg from '../bg3.jpg';
import Card from './Card';

const Row = ({title}) => {
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            <Card img={bg}/>
            
        </div>
    </div>
  )
}

export default Row