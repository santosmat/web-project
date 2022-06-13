import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DescriptionCard from './DescriptionCard';
import InfoCard from './InfoCard';
import Details from './Details';

const BookPage = ({bookList}) => {

    const params = useParams()
    const [book, setBook] = useState(bookList.filter(book => book.id == params.id)[0]);


   
    useEffect(() =>{
        setBook(bookList.filter(book => book.id == params.id)[0])
        console.log(book)
    }, [params])

    return ( 
        <>
            <InfoCard book={book}/>
            <DescriptionCard book={book} />
            <Details book={book}/>
        </>
     );
}
 
export default BookPage;