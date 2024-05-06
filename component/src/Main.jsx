import React from 'react'
import bird from "../img/bird.jpg"
import yesilkus from "../img/yesilkus.webp"
// public klasöründe olmayan resimlere erişmek için import yapmak gerekiyor 
// 1000 tane resimi i for döngüsü ile publicte erişebiliriz ama diğer şekil hepsini import etmemiz gerekir

export const Main = () => {

    //local style objesi harici bir dosyada import edilebilir
    const parStyle={
        fonFamily:"thoma",
        color:"green",
        fonSize:"5rem"
    }
    const imgStyle = {
        width:"300px",
        margin:"10px",
        height:"400px",
        borderRadius:"40px"
    }
  return (
    <main>
        {/* inline-styling (key-value), notasyon olarak camelcase kullanılıyor */}
        <h1 style={{color:"red", backgroundColor:"black"}}>Main Section</h1>
        <p style={parStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus quasi 
            repudiandae natus laborum vitae minus odit, obcaecati molestias dolorum deleniti
             iure repellat provident commodi. Nesciunt natus sed voluptate! Soluta!</p>


         <p style={parStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus quasi 
            repudiandae natus laborum vitae minus odit, obcaecati molestias dolorum deleniti
             iure repellat provident commodi. Nesciunt natus sed voluptate! Soluta!</p>

             <img src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg" alt="owl"  
             style={imgStyle}/>

             <img src="https://cdn.pixabay.com/photo/2024/04/15/17/51/ai-generated-8698374_640.png" alt="owl" style={imgStyle}/>

             <img src={bird} alt="huming" style={imgStyle}/>

             <img src={yesilkus} alt="huming" style={imgStyle} />

             {/* Public klasöreüne direk ana dzin olduğu için ./ deyip içindekilere erişebiliriz  */}
             <img src="./images/abc.webp" alt="publs"  style={imgStyle}/>

    
    
    </main>
  )
}
