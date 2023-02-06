import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Qna = () => {
    const { 
        //폼 안의 클릭함수
        handleSubmit,
        //전송관련함수
        register,
        //유효성검사 : 처음 폼이 비어있으므로 errors로 시작한다.
        formState: { errors } } = useForm();
        //검수함수
        const onSubmit = values => console.log(values);

    //중복제출막기 : 버튼제어
    // const [statue, updateStatue] = useState(false);
    // const [values, setValues] = useState({
    //     comNm: "",
    //     email: "",
    //     password: "",        
    //     content: ""
    //   })

    // const [ password, setPassword ] = useState("");
    // const [ statue, updateStatue] = useState(false);

    // const changePw = ({ target : {value} }) => setPassword(value);
    // const sendform = async (e) => {
    //     //폼태그는 기본적으로 새로고침한다.
    //     //폼태그가 중복 실행되지않도록 막아야한다.
    //     updateStatue(true); //버튼막아
    //     e = e || window.event;
    //     e.preventDefault(); //싱글페이지니깐 새로고침하지마
    //     await new Promise( (r) => setTimeout(r, 1000))
    //     alert(`수정된 비밀번호 확인해보기 ${password}`)       
    //     updateStatue(false); // 다시버튼기능돌려줘
    // }
    
    // const handleChange = (e) =>{
    //     setValues({
    //         ...values,
    //         [e.target.name] : e.target.value
    //     })
    //     //input의 name을 변수이름과 같이 해서 식을 심플하게 처리
    // }
    // const sendform = async (e) => {
    //     e = e || window.event;
    //     e.preventDefault();//새로고침 막기
    //     updateStatue(true);//버튼 막기
    //     //데이터를 전송하거나 유효성검사
    //     await new Promise( (r) => setTimeout(function(){
    //         alert(JSON.stringify(values, null, 10))//문자열로 보여준다. 자바스크립트를 순수 메모로 보내기위해
    //         //첫번째자리 필수 두번째 세번째는 선택,null은 키값 자리, 10은 가독성때문에 띄어쓰기 공백10개 넣겠다.
    //     }, 1000)) //await 앞에 넣어주면 동기화로 된다. Promise는 비동기
    //     updateStatue(false);//버튼 정상화


    return (
        <div id="qna" className='py-5 col-6 mx-auto'>
            <h2 className='text-center py-5'>문의하기</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ul>
                    <li className='mb-2 '>
                    <input
                    placeholder='email'
                    className='w-100 d-block'
                    type="email"
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                    />
                    {/* formState의 설정해둔 errors의 이메일에러 메세지출력 */}
                    {errors.email && errors.email.message}
                    </li>
                    <li className='mb-2 '>
                        <input
                        placeholder='username'
                        className='w-100 d-block'
                        {...register("username", {
                            validate: value => value !== "admin" || "Nice try!"
                        })}
                        />
                    {errors.username && errors.username.message} 
                    </li>
                </ul>
                <p className='d-flex justify-content-end'>
                    <button type="submit">Submit</button>
                </p>
            </form>

            {/* <form onSubmit={ sendform } className='col-6 mx-auto'>
                <ul>
                    <li className='my-3'>
                        <input type="text" 
                            placeholder='회사명을 기입해주세요.' 
                            name="comNm"
                            value={values.comNm}
                            className="w-100"
                            onChange={ handleChange }
                         />
                    </li>
                    <li className='my-3'>
                        <input type="text" 
                            placeholder='이메일을 기입해주세요.' 
                            name="email"
                            value={values.email}
                            className="w-100"
                            onChange={ handleChange }
                         />
                    </li>
                    <li className='my-3'>
                        <input type="password" 
                            placeholder='패스워드를 기입해주세요.' 
                            name="password"
                            value={values.password}
                            className="w-100"
                            onChange={ handleChange }
                         />
                    </li>
                    <li className='my-3'>
                        <input type="text" 
                            placeholder='한줄메모를 기입해주세요.' 
                            name="content"
                            value={values.content}
                            className="w-100"
                            onChange={ handleChange }
                         />
                    </li>
                </ul>
                <div className='d-flex justify-content-end py-3'>
                    <button type="submit" disabled={statue}>문의하기</button>   
                </div>
                {/* <input type="password" 
                       value={password} 
                       name="pw"
                       onChange={ changePw  }
                         /> */}
                {/* <button type="submit" disabled={statue}>변경하기</button> */}
                             
            {/* </form> */} 
        </div>
    );
}

export default Qna;
