import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addUser } from '../redux/modules/Users';
import { useNavigate } from 'react-router-dom';
import {addfetchUser} from '../redux/modules/Diary_notes'
import {v4 as uuidv4} from "uuid";
import Button from '../components/Button';



function Diary_write() {
  const [name, setName] = useState({
    userName : ''
  });
  const [title, setTitle] = useState({
    userTitle : ''
  });
  const [contents, setContents] = useState({
    userContents : ''
  });

 

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  
<<<<<<< HEAD
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if(title.length < 5) { 
        return alert('5글자 이상써주세요!');
      };
      console.log('submit');
=======
  const titlealert = () => {
    if(title.userTitle.length < 10 ){
      alert('10글자 이상')
    } 
  } 

  return (
    <form onSubmit={(event) => {event.preventDefault();
     
>>>>>>> a35ae88924f3b902734a5522807c722b428fb554
      dispatch(addfetchUser({id: uuidv4(), name,title,contents}));
      }}
      className="box">
      <div className="boxname">
        작성자
          <input
<<<<<<< HEAD
            placeholder="name"
            //minLength={10}
=======
            placeholder="작성자의 이름을 입력해주세요.(5자 이내)"
            required
>>>>>>> a35ae88924f3b902734a5522807c722b428fb554
            onChange={(event) => {
            const { value } = event.target;
            setName({ ...name, userName:value });
            }}
            />
      </div>
      <div className="boxtitle">
        제목
        <input
<<<<<<< HEAD
          //minlength={5}
=======
          minlength={10}
>>>>>>> a35ae88924f3b902734a5522807c722b428fb554
          placeholder="제목을 입력해주세요.(10자 이상)"
          required
          value={title.userTitle}
          onChange={(event) => {
            const { value } = event.target;
            setTitle({ ...title, userTitle:value });
          }}      
        />
   
        
      </div>
      <div className="boxcomment">
        내용
        <input
          placeholder="내용을 입력해주세요.(10자 이상)"
          required
          onChange={(event) => {
            const { value } = event.target;
            setContents({ ...contents, userContents:value });
          }}
          
        />
  
      </div>
<<<<<<< HEAD
      <button type="submit">Add</button>
      
      <Button type="button" onClick={() => navigate('../diarywriteAll')}>
        일기 보러가기  
      </Button>
=======
      <Button type="submit" onClick={titlealert}>Add</Button>

      <Button label =  "일기보러가기" type="button" onClick={() => navigate('../diarywriteAll')}/>
        
>>>>>>> a35ae88924f3b902734a5522807c722b428fb554
    </form>
  );
}

export default Diary_write;
