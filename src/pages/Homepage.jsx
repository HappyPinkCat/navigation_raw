import React from 'react'
import './Homepage.scss'
export default function Homepage() {
  let list=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='box_container'>
        <header>
            <img src="" alt="" />
            <h1>Homepage</h1>
            <h3>some description:   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt dolor ut in! Lorem, ipsum dolor.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro error doloribus quo perferendis iste voluptatibus qui nulla quam impedit est praesentium sequi libero ad cum, excepturi consequatur dolores magnam. </h3>
            <input type="text" name="" id="" className='input_box'/>
        </header>
        <div className='list_container'>
          {list.map(item=>{
            return <h4 className='list_item'>标题{item}</h4>
          })}
        </div>
    </div>
  )
}
