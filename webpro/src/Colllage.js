import React from 'react'

const Colllage = () => {

 const CollageData=[
  {
   name:"LiveSkill",
   city:"Gujranwala",
   website:"liveskill.com",
   student:[
    {
     name:"shahzad",
     age:25,
     course:"web"
    },
    {
     name:"ALi",
     age:26,
     course:"Office"
    },
    {
     name:"Ahmad",
     age:20,
     course:"PHP"
    }

   ]
  },
  {
   name:"Aptech",
   city:"Lahore",
   website:"aptech.com",
   student:[
    {
     name:"shahzad",
     age:25,
     course:"web"
    },
    {
     name:"ALi",
     age:26,
     course:"Office"
    },
    {
     name:"Ahmad",
     age:20,
     course:"PHP"
    }

   ]
  },
  {
   name:"It Skill",
   city:"Gujranwala",
   website:"itskill.com",
   student:[
    {
     name:"shahzad",
     age:25,
     course:"web"
    },
    {
     name:"ALi",
     age:26,
     course:"Office"
    },
    {
     name:"Ahmad",
     age:20,
     course:"PHP"
    }

   ]
  },
  {
   name:"Punjab",
   city:"Karachi",
   website:"punjab.com",
   student:[
    {
     name:"shahzad",
     age:25,
     course:"web"
    },
    {
     name:"ALi",
     age:26,
     course:"Office"
    },
    {
     name:"Ahmad",
     age:20,
     course:"PHP"
    }

   ]
  }
 ]

  return (
    <div>
      {
       CollageData.map((colg , i)=>(
        <div key={i}  style={{backgroundColor:"gray",margin:"50px", padding:"30px 50px"}}>
         <h2>Collage Name : <span style={{color:"white"}}>{colg.name}</span></h2>
         <h2>Collage city : <span style={{color:"white"}}>{colg.city}</span></h2>
         <h2>Collage website : <span style={{color:"white"}}><a href={colg.website} >{colg.website}</a></span></h2>

         <h1>Students</h1>
         <div>
          {
           colg.student.map((student , i)=>(
            <div key={i} style={{border:"2px solid" , textAlign:"center"}}>
              <h3>{student.name}</h3>
              <h3>{student.age}</h3>
              <h3>{student.course}</h3>
            </div>
           ))
          }
         </div>
        </div>
       ))
      }
    </div>
  )
}

export default Colllage
