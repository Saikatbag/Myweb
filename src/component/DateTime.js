// import { date } from 'joi'
import React, { useEffect, useState } from 'react'

export default function DateTime() {
 var [today, settoday] = useState();
 var [time, setTime] = useState();
 useEffect(() => {
            var showdatetime= new Date();
            var todayDate= showdatetime.getDate() + "/ " + (showdatetime.getMonth()+1) + '/ '+ showdatetime.getFullYear();
            settoday(todayDate)
            var todayTime= showdatetime.getHours() + ":" + (showdatetime.getMinutes()+1) + ':'+ showdatetime.getSeconds();
            setTime(todayTime)
},[time]);
    

  return (
    <div>
        <h1>
        Date:{today}
        <br/>
        Time :{time}
        </h1>
    </div>
  )
}
