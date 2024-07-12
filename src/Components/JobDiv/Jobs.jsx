import React from 'react';
// Import icons
import {BiTimeFive} from 'react-icons/bi';
// Import images
import logo1 from "../../Assets/logo1.jpg";
import logo2 from "../../Assets/logo2.jpg";
import logo3 from "../../Assets/logo3.jpg";
// for all the jobs, we are going to use high order array method called map...
// in this case we shall list all the jobs into an array called Data..first-letter:

const Data = [
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Novac Lius Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI/UX Designer',
    time: '14Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Data Analyst',
    time: '2mnt',
    location: 'London',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Instagram Co'
  },
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Novac Lius Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI/UX Designer',
    time: '14Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Data Analyst',
    time: '2mnt',
    location: 'London',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Instagram Co'
  },
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Novac Lius Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI/UX Designer',
    time: '14Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Data Analyst',
    time: '2mnt',
    location: 'London',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Instagram Co'
  },
  {
    id:1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Novac Lius Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI/UX Designer',
    time: '14Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Data Analyst',
    time: '2mnt',
    location: 'London',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, repellendus',
    company: 'Instagram Co'
  }
]

//this is a single company, lets see how to map it...

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

    {
      Data.map(({id,image,title,time,location,desc,company}) => {
      return (
        // this will return a single job post based on the id
        <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

        <span className='flex justify-between items-center gap-4'>
          <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
          <span className='flex items-center text-[#ccc] gap-1'>
            <BiTimeFive />{time}
          </span>
        </span>

        <h6 className='text-[#ccc] '>{location}</h6>

        <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
          {desc}
        </p>

        <div className="company flex items-center gap-2">
          <img src={image} alt="Company Logo" className='w-[10%]' />
          <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
        </div>

        <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
          Apply Now
        </button>

      </div>
      )
      })
    }

      </div>
    </div>
  )
}

export default Jobs