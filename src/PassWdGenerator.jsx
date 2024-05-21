import React, { useCallback, useEffect, useState, useRef} from 'react'

function PassWdGenerator() {
    const[pass,setPass] = useState("");
    const[length,setLength] = useState(8);
    const[number,setNumber] = useState(false);
    const[spchar,setSpChar] = useState(false);
    //useRef hook 

    const passwdRef = useRef(null);

    const passGenerator = useCallback(() => {
        let password = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(number) str+="0987654321";
        if(spchar) str+="!@#$%^&*()";

        for(let i=1;i<=length;i++){
            let char = Math.floor(Math.random() * str.length + 1);
            password += str.charAt(char);
        }
        setPass(password);
        

    }, [setPass,length,number,spchar])

    useEffect(() =>{
        // set time interval used for change password per unit of time..
        // const interval = setInterval(() =>{
        //     passGenerator()
        // },2000)
        // return () => clearInterval(interval);
        passGenerator()
    },[length,number,spchar,passGenerator])



    const copytoclick = useCallback(() =>{
        passwdRef.current?.select(); 
        window.navigator.clipboard.writeText(pass);
        alert("copytoclipboard");
    },[pass])
    

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-400 bg-gray-800 opacity-90'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type='text' value={pass} className='outline-none py-1 px-3 w-full' placeholder='password' readOnly />
            <button className='bg-blue-600 mr-2 rounded-r-lg p-2 active:bg-blue-900' onClick={copytoclick}>copy</button>
        </div>
        <div className='flex justify-around'>
        <div className='flex text-center gap-x-1'>
            <input type='range' min={5} max={100} value={length} className='cursor-pointer w-24'
             onChange={(e) => {setLength(e.target.value)}} ref={passwdRef}>
            </input>
            <label>
                :Length {length}
            </label>
        </div>
        <div className='flex text-center gap-x-1'>
            <input type='checkbox' defaultChecked={number} id='numberinput' className='cursor-pointer'
            onChange={() => {setNumber((prev) => !prev)}}
            />
            <label>
                Number
            </label>
        </div>
        <div className='flex text-center gap-x-1'>
            <input type='checkbox' defaultChecked={spchar} id='spcharinput' className='cursor-pointer'
            onChange={()=> {setSpChar((prev) => !prev)}} />
            <label>
                SpecialChar
            </label>

        </div>
        {/* <div className='flex text-center gap-x-1'>
            <button onClick={() => {passGenerator()}}>Done</button>
        </div> */}
        </div>

        
    </div>
    
  )
}

export default PassWdGenerator