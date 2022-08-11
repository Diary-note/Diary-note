import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchUser, delfetchUser} from "../redux/modules/Diary_notes";

import styled from "styled-components";
import Button from "../components/Button";


function Diary_writeAll() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUser());
    }, [dispatch]);
    
    const users = useSelector((state)=>state.Diary_note.users) 
   //console.log(users)
    const navigate = useNavigate();
    
    return (
        <AllBox >
            {users?.length > 0 && 
                users.map((users) => (
                    <BoxCont key={users.id}>
                        <p>{users.name}</p>
                        <p>{users.title}</p>
                        <p>{users.contents}</p>
                        <Button label='자세히보기' onClick={()=>navigate(`/diarydetail/${users.id}`)}/>
                        <Button label='삭제' onClick={() => dispatch(delfetchUser(users.id))}></Button>
                    </BoxCont>
                ))
            }
        </AllBox>
    )
}
const AllBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
`

const BoxCont = styled.div`
    width:600px;
    border: 2px solid #202126;
    margin-bottom:10px;
    border-radius:20px;
    background-color:#adca49;
    padding:10px 30px 20px 30px; 
`

export default  Diary_writeAll