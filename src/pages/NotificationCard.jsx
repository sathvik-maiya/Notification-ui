import React from 'react'

function NotificationCard({notification}) {
    
  return (
 
    <div className='ml-12 '>
      {notification.map((noti) => (    
        <div key={noti._id} className={`flex flex-col mt-[0.75rem] h-[5.5rem] w-[60.80rem] rounded-lg bg-[#e5d2f3bf] border-[#730ac633] border-b shadow-[0px_4px_4px_#a241ee38]  justify-center py-[1rem] px-[1.5rem] ${noti.noti_time === "a moment ago" ? 'bg-[#e5d2f3bf]' : 'bg-[#f9f4fe]'} `} >
            <div className="[font-family:'Arimo'] font-bold  text-[#03bf9c] text-[16px] tracking-[0.32px] leading-[19.2px] "  >
              {noti.type}
            </div>
            <div className='flex flex-row mt-[0.75rem] justify-between gap-[0.75rem]'>
                <div>
                  <p className=" [font-family:'Arimo'] font-normal text-[#5f5f5f] text-[18px] tracking-[0.54px] leading-[22.5px] ">
                      <span>
                       {noti.text}{" "}
                    </span>
                    <span className=" [font-family:'Arimo'] font-bold">
                         {noti.name}{" "}
                    </span>
                    <span>
                      {noti.amt_date_type}
                    </span>

                    <span className={`${noti.fees_time === "now" ? 'text-[#730ac6] font-bold' : ''} `}>
                        {" "}  {noti.fees_time}
                    </span>
                  </p>
                  
                </div>
                <div>
                    <span className=" [font-family:'Arimo'] font-bold text-[#8e8e8e] text-[16px] tracking-[0.32px] leading-[19.2px] ">
                        {" "}  {noti.noti_time}
                    </span>
                  
                </div>
            </div>
        </div>
        ))}       
    </div>
  
 
  
  );
}

export default NotificationCard
