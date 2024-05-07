import React from 'react'
import { Photo } from './Photo'

// buradaki name ,phone , src bunlar birer props ve appjs dediğimin parent atadan childe ataya doğru ilerleyecektir
// props yazarak yaparsan süsülü kullanmana gerek yok direk değişkenleri kullanacaksan süslü parantez olacak

export const Card = ({name,phone, src}) => {
  //console.log(props)
  return (
    <div>
        <h2>Hello {name}</h2>
        <Photo resim={src}/>
        <p>Phone: {phone}</p>
    </div>
  )
}
