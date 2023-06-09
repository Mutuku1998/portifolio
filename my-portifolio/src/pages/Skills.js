import { textAlign } from '@mui/system';
import React from 'react';

const Skills = () => {
  return (
    <div className='skills'>
        <h2 className='title-text'> My professional skills</h2>
<div className='skill-box'>
    <span className='title'>HTML</span>
    <div className='skill-bar'>
        <span className='skill-per html'>
        <span className='tooltip'>95%</span>
        </span>
    </div>
</div>
<div className='skill-box'>
    <span className='title'>CSS</span>
    <div className='skill-bar'>
    <span className='skill-per css'>
        <span className='tooltip'>80%</span>
        </span>
    </div>
</div>
<div className='skill-box'>
    <span className='title'>Javascript</span>
    <div className='skill-bar'>
    <span className='skill-per javascript'>
        <span className='tooltip'>60%</span>
        </span>
    </div>
</div>
<div className='skill-box'>
    <span className='title'>PHP</span>
    <div className='skill-bar'>
    <span className='skill-per php'>
        <span className='tooltip'>70%
        </span>
        </span>
    </div>
</div>
<div className='skill-box'>
    <span className='title'>ReactJs</span>
    <div className='skill-bar'>
    <span className='skill-per reactjs'>
        <span className='tooltip'>60%
        </span>
        </span>
    </div>
</div>
</div>

  );
};
export default Skills;