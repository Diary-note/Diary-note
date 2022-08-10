import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { addComment, delComment, changeComment } from "../redux/modules/Users";
import Button from "../components/Button";
import useInput from "../components/useInput";
import {v4 as uuidv4} from "uuid";




function Diary_writeAll() {
    const dispatch = useDispatch();
<<<<<<< HEAD

    const [newText, setNewText] = useState("")
=======
    const comments = useSelector((state)=> state.userReducer)
    const RandomNum = uuidv4();
    const customTitle = useInput('');
    const customComment = useInput('');
    const customNewText = useInput('');
    const [visible, setVisible] = useState(false);
>>>>>>> a35ae88924f3b902734a5522807c722b428fb554



    return (
        <div>
        <span>일기 댓글 페이지입니다.</span><br/>
        <br/>
        <input placeholder="이름(5자 이내)"  maxLength={5} type="text"  {...customTitle} /> 
        <input placeholder="댓글을 추가하세요.(100자 이내)"  maxLength={100}  type="text"  {...customComment} />
        <Button label="추가하기" onClick={()=>{dispatch(addComment({id: RandomNum, title: customTitle.value , comment: customComment.value}))}}/>
        <br/>
        <br/>
        <div id="cards">                    
            {comments.map((comment) => {return(
                <>
                    <div key={comment.id}>
                    <h2>{comment.title}</h2>
                    <span>{comment.comment}</span>

<<<<<<< HEAD
                    <Button label='삭제하기' onClick={() => dispatch(delComment(comment.id))}/>
                    <Button label='수정하기'/></div><br />
                    <div className="changeDiv"><input type='text' onChange={(e)=>{setNewText(e.target.value)}}/><Button label = '수정완료' onClick={() => dispatch(changeComment({new: newText, id : comment.id, content : comment.content}))}/></div>
=======
                    <Button label= '삭제하기' onClick={() => dispatch(delComment(comment.id))}/>
                    <Button label='수정하기' onClick={() =>{ setVisible(!visible);}}
                        
                    /></div><br />
                    <div className="onOff" visible><input type='text' {...customNewText} /><Button label = '수정완료' onClick={() => dispatch(changeComment({new: customNewText.value, id : comment.id}))}/></div>
>>>>>>> a35ae88924f3b902734a5522807c722b428fb554
                </>
            )})}
        </div>
    </div>
    );
};


export default  Diary_writeAll

