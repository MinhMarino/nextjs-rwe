import  mainRepository from '@/app/services/api';
import ListArticle from './ListArticle';

export async function SSRListArticle() {
    const fetchData = async () => {
        const result = await mainRepository.getAllArticles();
        if (result.success && result.data) {
            return result.data.articles
        }
        return [];
    }
    const data = await fetchData();

    return <ListArticle data={data}/>
}