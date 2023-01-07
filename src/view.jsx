import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import {BiEdit} from "react-icons/bi"
function View({ books, setBooks ,Update}) {
    const deleteBook = (index) => {
        const remove = books.filter((value, ind) => {
            return ind !== index
        });
        setBooks(remove);
    }
    
    

    return (
        <>
            {books.map((value, index) => {
                return (
                    <tr key={index}>
                        <td>{value.SN}</td>
                        <td>{value.Title}</td>
                        <td>{value.Author}</td>
                        <td onClick={() => { deleteBook(index) }}><AiFillDelete /></td>
                        <td onClick={() =>  Update(value.SN) }><BiEdit/></td>
                    </tr>
                )
            })}
        </>
    )
}

export default View