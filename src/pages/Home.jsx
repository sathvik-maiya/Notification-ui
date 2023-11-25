import React from 'react'
import arrow from "../images/Vec.png";
import add from "../images/add.png";
import NotificationCard from"./NotificationCard.jsx";

const Notificationdata=[
    {   _id:1,
        type:'Payments',
        text:"You have received payments from",
        name:'Krishna Murthy',
        amt_date_type:"₹250/-",
        fees_time:"consultation fees.",
        noti_time:"a moment ago"
    },
    {
        _id:2,
        type:'Payments',
        text:"You have received payments from",
        name:'Oak Kumar',
        amt_date_type:"₹250/-",
        fees_time:"consultation fees.",
        noti_time:"2 mins ago"
    },
     {
        _id:3,
        type:'Appointments',
        text:"You have an appointment scheduled with",
        name:'Prakash Singh',
        amt_date_type:"today at",
        fees_time:"15:30",
        noti_time:"1 hr ago"
    },
     {
        _id:4,
        type:'Appointments',
        text:"You have an appointment scheduled with",
        name:'Prakash Singh',
        amt_date_type:"today at",
        fees_time:"15:30",
         noti_time:"1 hr ago"
    },
     {
        _id:5,
        type:'Update',
        text:"Update for the app is now available.",
        amt_date_type:"Install the update",
        fees_time:"now",
         noti_time:"15 Oct, 2023"
    },
     {
        _id:6,
        type:'Status',
        text:"You have changed the status of",
        name:'Malini',
        amt_date_type:"as Guest.",
         noti_time:"11 Sept, 2023"
    },
]

function Home() {
  return (
    <div className='pt-1'>
        <hr className="my-6 ml-12 w-[972px] max-sm:w-[360px] max-sm:ml-0" />
         <div className=" flex flex-row  max-sm:flex-col max-sm:px-2 ">
          <div className="flex flex-row ml-12 max-sm:mx-8">
            <span  className='max-sm:text-sm'  style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >Dashboard</span>
            <div className="p-[5px] max-sm:p-1"><img src={arrow} alt="Arrow" width={7} /></div>
            <span className='max-sm:text-sm'style={{  fontFamily: 'Open Sans',fontSize: '15px',fontWeight: 400, color:'grey'}} >Notifications</span>
          </div>
    
                        <div className="ml-[532px] max-sm:ml-[55px] max-sm:pt-6">
                        <button className="text-white px-[50px] py-2 rounded-md relative max-sm:px-[30px] max-sm:py-1 hover:shadow-lg"  style={ { backgroundColor:'#03BF9C'}}>   <img src={add} alt="add" className='absolute bottom-[9px] left-[21px] max-sm:left-[6px] max-sm:bottom-[7px]  ' width={20} /> Schedule Appointment</button>
                         </div>
     </div>

               <hr className="my-[0.85rem] ml-12 w-[972px] max-sm:w-[360px] max-sm:ml-0" />
                  <div className='ml-12'>
                       <div className="[font-family:'Open_Sans'] font-bold text-[#585858] text-20px leading-[20px] ">
                           Notifications
                       </div>
                       <div  className="[font-family:'Arimo'] font-normal text-[#979797] text-[14px] mt-[6px] leading-[18px] tracking-[0.28px]">
                           15 notifications found 
                       </div>
                 </div>
      
                <div>
                  <NotificationCard notification={Notificationdata}/>
                </div>


    </div>
  )
}

export default Home
 