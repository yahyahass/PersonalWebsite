import React from 'react'
import {BsGithub, BsInstagram, BsFillFileEarmarkMedicalFill} from 'react-icons/bs';
import {FaBeer} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsGithub
            a href='https://github.com/yahyahass'
            />
        </div>
        <div>
            <BsFillFileEarmarkMedicalFill/>
        </div>
        <div>
            <AiOutlineMail/>
        </div>
        
    </div>
  )
}

export default SocialMedia