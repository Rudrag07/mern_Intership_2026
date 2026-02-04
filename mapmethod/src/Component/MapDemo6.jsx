import React from 'react'


let MapDemo6= () => {
        let users =[
            {id:1,name:"Rudra",salary:50000,age:24},
            {id:2,name:"Rohit",salary:60000,age:23},
            {id:3,name:"Kiran",salary:30000,age:25},
            {id:4,name:"Rahul",salary:15000,age:23},
        ]
  return (
    <>
    <br />
    <table border={2}width={400}align='center'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>salary</th>
                <th>Age</th>
                
            </tr>
        </thead>
        {
            users.map((u)=>{
                    return(
                        <tbody key={u.id}>
                            <tr style={{backgroundColor:(u.id==5) && "lightblue" }}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td style={{backgroundColor:(u.salary>30000) && "yellow"}}>{u.salary}</td>
                            <td>{u.age}</td>
                            
                            </tr>
                        </tbody>
                    )

            
            })
        }
    </table>
    </>
    
  )
}

export default MapDemo6