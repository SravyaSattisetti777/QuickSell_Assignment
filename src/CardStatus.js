import React, { useEffect, useState } from 'react';
import './Card.css';
import tag from '../src/assets/icons/tag.png'
import done from '../src/assets/icons/Done.svg'
import Cancelled from '../src/assets/icons/Cancelled.svg'
import backlogimg from '../src/assets/icons/Backlog.svg'
import inprogressimg from '../src/assets/icons/in-progress.svg'
import img0 from '../src/assets/icons/No-priority.svg'
import img4 from '../src/assets/icons/SVG - Urgent Priority colour.svg'
import img3 from '../src/assets/icons/Img - High Priority.svg'
import img2 from '../src/assets/icons/Img - Medium Priority.svg'
import img1 from '../src/assets/icons/Img - Low Priority.svg'
import todo from '../src/assets/icons/To-do.svg'
import usr1 from '../src/assets/icons/usr-1.png'
import usr2 from '../src/assets/icons/usr-2.png'
import usr3 from '../src/assets/icons/usr-3.png'
import usr4 from '../src/assets/icons/usr-4.png'
import usr5 from '../src/assets/icons/usr-5.png'
import usr6 from '../src/assets/icons/usr-6.png'
import usr7 from '../src/assets/icons/usr-7.png'


const CardStatus = (props) => {
    const [available, setavailable] = useState(false);
    let imgt=`imgr${props.ticket.priority.toString()}`;
    let dotuser;
    
    const [users, setusers] = useState([]);
    const [tick, setTick] = useState([]);

    useEffect(() => {

        hello();
    }, []);

    async function hello() {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");

            const result = await response.json();

        setTick(result.tickets);
        setusers(result.users);
        } catch (error) {
            console.error("Error:", error);
        }


    }
    const priorityImageMap = {
        0: img0,
        1: img1,
        2: img2,
        3: img3,
        4: img4,
      };
    const statusImageMap={
        "Todo": todo,
        "In progress":inprogressimg,
        "Backlog":backlogimg,
        "Done":done,
        "Cancelled":Cancelled,

    }
    const usrImageMap = {
        "usr-1": usr1,
        "usr-2": usr2,
        "usr-3": usr3,
        "usr-4": usr4,
        "usr-5": usr5,
        "usr-6": usr6,
        "usr-7": usr7,
      };
      useEffect(() => {
        users.map((user) => {
                               
            if(
                props.ticket &&
                 user.id === props.ticket.userId){
                    setavailable(user.available);
                
            }  })   
      }, [users])
      
      
      const usrImage=usrImageMap[props.ticket.userId]||usr1;
      const imgSrc = priorityImageMap[props.ticket.priority] || img0;
      const statusImgSrc=statusImageMap[props.ticket.status]||todo;
    if(available===true){
        dotuser=<div className='availableUser' />;

    }else{
        dotuser=<div className='notavailableUser' />;
    }
   
    

    return (
        <div className='cardBox'>
            <div className='cardBoxrow'>
                <div className='cardBoxin'>
                    <text className='cardId'>{props.ticket.id}</text>
                    <text className='cardTitle'>
                        {props.ticket.title}</text>
                </div >
                <div style={{ height: "38px" }}>
                    <img className='userImg' src={usrImage} alt='' />
                    {dotuser}
                </div>
            </div>


            <div className='lowerBox'>
                <div className='priorityBox'><img className='priorityImg' src={imgSrc} alt='logo' /></div>

                <div className='tagBox'>
                    <img className='tagImg' src={tag} alt='logo' />
                    <tag className='tagText'>{props.ticket.tag}</tag>
                </div>

            </div>
        </div>
    );
};

export default CardStatus;