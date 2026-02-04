import React from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
// import img3 from "../assets/img3.jfif"
import img4 from "../assets/img4.jpg"

const MapDemo9= () => {
        let users =[
            {num:1,name:"Fundamental of programing Language C",price:250,imgURL:img1},
           {num:2,name:"Python",price:450,imgURL:img2},
           {num:3,name:"DataBase Managment System",price:350,imgURL:""},
            {num:4,name:"ReactJS From Scratch",price:400,imgURL:img4},
        ]
  return (
    <>
    <br />
    <table border={2}width={400}align='center'>
        <thead>
            <tr>
                <th>No</th>
                <th>Book</th>
                <th>Price</th>
                <th>Image</th>
                
            </tr>
        </thead>
        {
            users.map((book)=>{
                    return(
                        <tbody key={book.id}>
                            <tr style={{backgroundColor:(book.price>=400) && "blue" }}>
                            <td style={{width:60}}>{book.num}</td>
                            <td>{book.name}</td>
                            <td style={{width:60}}>{book.price} </td>
                            <td style={{color:(book.imgURL=="")&& "red"}}>{book.imgURL=="" ? <h4>{book.name} not found</h4>:<img src={book.imgURL} alt='' width={60}height={70}/>}</td>
                            
                            </tr>
                        </tbody>
                    )

            
            })
        }
    </table>
    </>
    
  )
}
export default MapDemo9