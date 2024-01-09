import React from 'react'
import './Homepage.scss'
import data from '../mock/list'
import logo from '../static/logo.png';
import avatar from '../static/avatar.png';
export default function Homepage() {
  return (
    <div className='box_container'>
        <header>
            <div className='top_img_box'>
              <img src={logo} alt="logo" className='logo'/>
              <img src={avatar} alt="" className='avatar'/>
            </div>
            <h1>Homepage</h1>
            <h3>some description:   Lorem  adipisicing. Tempore nesciunt dolor ut in! Lorem, ipsum dolor.    </h3>
            <input type="text" name="" id="" className='input_box'/>
        </header>
        <div className='list_container'>
          {data.list.map((item,index)=>(
             <div className='list_item' key={index}>
              <h4>标题{item.title}</h4>
              <p>描述{item.desc}</p>
              <img src={item.cover} alt="图片demo" className='list_img'/>
            </div>
          ))}
        </div>
    </div>
  )
}
