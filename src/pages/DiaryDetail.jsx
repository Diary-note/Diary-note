import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

function Diary_writeAll() {
    const dispatch = useDispatch();

    const userList = useSelector((state)=> state.userReducer); 
    console.log(userList)
    const [edited, setEdited] = useState(false);

    return (
        <div>
            <div>
                {userList.map((user)=>{
                    return(
                        <>
                            <div key={user.id}>
                                <Link to="/diarywriteall">뒤로가기</Link>
                                <p>{user.id}</p>
                                <p>{user.title}</p>
                                <p>{user.contents}</p>
                                {/* (<button 
                                    type="button"
                                    onClick={()=>{onClickEditBtn}}>수정</button>) */}
                                <button>저장</button>
                            </div>
                        </>
                    )
                })
                    
                }
            </div>
        </div>
    )
}



export default  Diary_writeAll