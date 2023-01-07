import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import { useNavigate } from "react-router-dom"
import View from './view';
import "./P-2.css"
import {BsBookmarkHeart} from "react-icons/bs"
import {GiSpellBook} from "react-icons/gi"

export  const BookLib = () => {
    // let navigate =useNavigate();
    // const    {index  }= useParams();
   

    const getData = () => {

        const data = localStorage.getItem("books");
        if (data) {
          
            return JSON.parse(data);
           
        }
        else {
            return []
        }
    }


  

        const [btn,setBtn] =useState(true);

        const [SN, SetSN] = useState("");
        const [Title, SetTitle] = useState("");
        const [Author, SetAuthor] = useState("");
        const [isedit , setEdit] =useState(null)
    
      
    const [books, setBooks] = useState(getData);
    const SaveDataHandeler = (event) => {
        event.preventDefault();
        let newBook = {
            SN,
            Title,
            Author,
        }
        if(!newBook){

        }
        else if (books&&!btn){
            setBooks(
                books.map((element)=>{
                    if(element.SN===isedit){
                        console.log("innersetbooks",isedit)
                        return{...element,Author,Title}

                    }
                        return element
                })
            )
            setBtn(true)
            SetSN("");
            SetTitle("");
            SetAuthor("");
            setEdit(null)
        }
        else{
        setBooks([...books, newBook]);
        SetSN("");
        SetTitle("");
        SetAuthor("");
        // return <a href='#down'></a>
        }
        
    }

    const Update =(SN)=>{
        let newEditItem = books.find((element)=>{
            return element.SN === SN
        })
        setBtn(false);
        console.log(newEditItem);
        SetAuthor(newEditItem.Author);
        SetTitle(newEditItem.Title)
        SetSN(newEditItem.SN)
        setEdit(SN);


    }
   
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
       
       
    }, [books ])


 let getBooks =()=>{
    const data = localStorage.getItem("books");
    console.log(JSON.parse(data))
}
    return (
        <><centre>
        <div className='container'>
            
           <div className='Firstdiv'> 
            <h1 className='animation-character'>Welcome to Your's Liberary!!!</h1>
            </div>

            <div className='container1'>

        <div className='container_child1'>
            <h2><BsBookmarkHeart/> Your <GiSpellBook/> Here!!!</h2>
            <form onSubmit={SaveDataHandeler}>
               <center> S.N:<input className='form-input input-1' type="number" required value={SN} placeholder="Enter the no!" onChange={(e) => SetSN(e.target.value)} />
                <br />
                TITLE:<input className='form-input input-2' type="text" required value={Title} placeholder="Enter the Title of the book!" onChange={(e) => SetTitle(e.target.value)} /><br />
                AUTHOR:<input className='form-input input-3' type="text" required value={Author} placeholder="Enter the Name!" onChange={(e) => SetAuthor(e.target.value)} /><br />
                <button type='submit' className='btn form-input'> SUBMIT</button>
                <button type='button' className='btn form-input'><a href="#down">View Book</a></button></center>
            </form>
        </div>
        {/* <View  books={books} setBooks={setBooks}  getBooks={update}/> */}
        <div style={{height:"30px"}}></div>
        <div className='suggestion'> <h2>scroll Right!</h2></div>
        <div   className='container_child2'>
        { books.length > 0 &&
        <div className='nested-child'>
        <table className='Table' cellSpacing={"8"}>
            <thead>
                <tr className='heading'>
                    <th>SN</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                <View  books={books} setBooks={setBooks}  Update={Update}/>
 
            </tbody >
            {/* <button onClick={()=>{localstorage.clear()}}>Clear</button> */}
        </table>
        <button className="btn1" id='down' onClick={()=>{setBooks([])}}>Delete-Records!</button>


        <div>
         
        </div>


        </div>}
        
        {books.length<1 && <div><h2>No Books Added Yet!</h2></div>}
            </div>
            </div>  
            </div>
            </centre>
        </>
    )
}



























