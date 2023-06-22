// import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/services/globalContext';

export default function ListArticle({ message }) {
    // const [listArticle, setListArticle] = useState([]);
    // const { mainRepository } = useGlobalContext();
    
    

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await mainRepository.getAllArticles();
    //         setListArticle(data.data.articles);
    //     };
    //     fetchData();
    // }, []);
    
    return (
        <>  
            <div>
                <p>List articles</p>
                <p>{message}</p>

            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    return { props: { message: "Hello" } }
  }