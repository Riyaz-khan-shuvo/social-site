import React, { useState } from 'react';
import FakeData from '../../FakeData/FakeData';
import './Name.css';
import { faHome , faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Name = (props) => {
    const [fake , setFake] = useState(FakeData);
    return (
        <div>
           
            {
            fake.map(fak=> <AllInformation fake={fak}></AllInformation> )
            }
           
        </div>
    );
};


function AllInformation(props) {
    const {name , email, address  , phone , profile , cover} = props.fake;
    return(
        <div>
            <div className='social-site'>
                <div className='cover'>
                    <img src={cover} alt=""/>
                </div>
                <div className='profile'>
                    <img src={profile} alt=""/>
                </div>
                <h1>{name} (Tech Lover) </h1>
                <p>email:{email} </p>
                <p>Phone: {phone} </p>
                <button>Add <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
}


export default Name;