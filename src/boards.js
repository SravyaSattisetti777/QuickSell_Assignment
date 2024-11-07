import React from 'react'
import { useEffect, useState } from 'react';
import Card from './Card.js'
import './Status.css'
import plusmore from './plusmore.png'
import nopriorityimg from '../src/assets/icons/No-priority.svg'


const  Board=(props)=> {
    const [todono, settodono] = useState();
    let usersdata = [''];
    const [tick, setTick] = useState([{ "id": "CAM" }]);
    const [todolist, settodolist] = useState([]);
    const [inProgressno, setinProgressno] = useState(0);
    const [doneno, setdoneno] = useState(0);
    const [cancelled, setcancelled] = useState(0);
    const [backlog, setbacklog] = useState(0);
    const [todonum, setTodonum] = useState(0);

    useEffect(() => {

        hello();
        count();


    }, []);

    async function hello() {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");

            const result = await response.json();


            setTick(result.tickets);

            console.log("tickets", tick);

        } catch (error) {
            console.error("Error:", error);
        }


    }
    function count() {
        tick.map((ticket) => {
            if (ticket.status === "Todo") {
                settodono(todono + 1)
                console.log("smd")
            }
            if (ticket.status === "In Progress") setinProgressno(inProgressno + 1)
            if (ticket.status === "Done") setdoneno(doneno + 1);
            if (ticket.status === "cancelled") setcancelled(cancelled + 1);
            if (ticket.status === "backlog") setbacklog(backlog + 1);

            console.log("todono");

        })


    }



  return (
    <div className='Board'>
                <div className='boardHeading'>
                    <img src={nopriorityimg} className='headingImg' alt=''></img>
                    <p className='cText' style={{width: "190px"}} >No-Priority</p>
                    <p className='cText'>{backlog}</p>
                    <div className='boardHeading' id='pluske'>

                        <img src={plusmore} className='headingImg' alt=''></img>
                    </div>


                </div>

                <div className='Cards'>

                    {
                        tick.length > 0 &&
                        tick.map((ticket) => {
                            return (
                                (ticket.priority === 0 && <Card  ticket={ticket}></Card>)
                            )
                        })     
                    }
                </div>

            </div>

  )
}



export default Board;