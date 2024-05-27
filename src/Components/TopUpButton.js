import React,{useState,useEffect} from 'react'

const TopUpButton = () => {
    const [topup,setTopup] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scroll > 100){
                setTopup(true)
            }else{
                setTopup(true);
            }
        })
    })
  return (
    <div>

    </div>
  )
}

export default TopUpButton