import React from 'react';
import home from "../images/home.png";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Come save animals with ' 
                imgsrc={home} 
                isCompName={true}
                compName="Pawsome Foundation"
                visit='/services' 
                btnname="Our Work" 
                text='It takes nothing away from a human to be kind to an animal.'
            />
        </>
    )
}

export default Home;