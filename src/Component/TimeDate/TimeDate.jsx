import React from 'react'
import './timedate.css'
import { useState } from 'react'
import { useEffect } from 'react'
import {MdDateRange} from 'react-icons/md'
function TimeDate() {
    const [time,setTime] = useState('')
    const [date,setDate] = useState({})

    useEffect(()=>{
        // console.log(1)
        //     fetch('https://api.keybit.ir/time/')
        //     .then(response => response.json())
        //     .then(data => {
        //         setDate({
        //             day: data.date.day.name,
        //             month: data.date.month.name,
        //             holiday : data.date.day.events.local.holiday,
        //             eventes: data.date.day.events.local.text,
        //             full: data.date.full.official.usual.en,
        //             year: data.date.year.name,


        //         })
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     });
},[])
useEffect(() => {
    const interval = setInterval(() =>{
        const d = new Date()
        const h = d.getHours().toString().padStart(2,'0')
        const m = d.getMinutes().toString().padStart(2,'0')
        const s = d.getSeconds().toString().padStart(2,'0')
        setTime(h+':'+m+':'+s)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='time-date-cuntener'>
        <h4><span>تاریخ</span><MdDateRange/></h4>
        <div className="live-time">
           <div className="time">{time}</div>
           <div className="time">
                {/* {date.full} */}
                1402/3/5
            </div>
        </div>
        <div className="date-cuntener">
            <div className="date t-date">
                {'امروز '}
                <span className='highlit'>
                    {/* {date.day+' '+date.month} */}{'سه خرداد'}
                </span>
            {/* {' '+date.year} */}{' هزار و جهارصد و دو ' }
            {" یک "+(date.holiday?'تعطیل ':"روز کاری") +' '+ `در فصل بهار `}
            </div>
                {/* <div className="t-date">{date.eventes}</div> */}
        </div>
    </div>
  )
}

export default TimeDate