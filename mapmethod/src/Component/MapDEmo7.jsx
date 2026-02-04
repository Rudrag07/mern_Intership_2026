import React from 'react'

const MapDEmo7 = () => {
        let users =[
            {id:1,Company:"Samsung",price:150000,Model:"S25Ultra"},
            {id:2,Company:"I-Phone",price:170000,Model:"17Pro"},
            {id:3,Company:"Vivo",price:80000,Model:"X200"},
            {id:4,Company:"Oppo",price:50000,Model:"Reno15"},
        ]
  return (
    <>
    <br />
    <table border={2}width={400}align='center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Price</th>
                <th>Model</th>
                
            </tr>
        </thead>
        {
            users.map((u)=>{
                    return(
                        <tbody key={u.id}>
                            <tr>
                            <td>{u.id}</td>
                            <td>{u.Company}</td>
                            <td style={{backgroundColor:(u.price>100000) && "red"}}>{u.price}</td>
                            <td>{u.Model}</td>
                            
                            </tr>
                        </tbody>
                    )

            
            })
        }
    </table>
    </>
    
  )
}

export default MapDEmo7