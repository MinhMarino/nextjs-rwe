import { useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/services/globalContext';

export default function ListArticle() {
    const [listArticle, setListArticle] = useState([]);
    const { mainRepository } = useGlobalContext();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await mainRepository.getAllArticles();
            setListArticle(data.data.articles);
        };
        fetchData();
    }, []);
    
    return (
        <>  
            {
                listArticle.map((article, index) => (
                    <div key={index} className="border-t border-[lightgray] py-4">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                                    <img className="" src={article?.author?.image ?? ''} alt=""/>
                                </div>
                                <div className="max-w-[2000px] overflow-hidden">
                                    <p className="text-[#5CB85C] text-sm hover:underline">{ article?.author?.username ?? '' }</p>
                                    {/* <p className="text-[#C8C8C8] text-xs">{ dateFormat(article?.createdAt, 'LL') }</p> */}
                                </div>
                            </div>
                            <div className="rounded-md border border-[#5CB85C] min-w-[60px] min-h-[26px] flex items-center justify-center gap-2 px-1">
                                {/* <img className="w-[15px] h-[15px]" src="@/assets/images/svg/heart.svg" alt=""> */}
                                <p className="text-[#5CB85C] text-sm">{article?.favoritesCount }</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold mb-1">{ article?.title }</p>
                        <p className="text-base mb-1 text-[gray]">{ article?.description }</p>
                        <div className="flex items-center justify-between">
                            <p className="text-[gray] text-sm">Read more</p>
                            <div className="flex items-center justify-center gap-1">
                                {
                                    article.tagList.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="text-[gray] px-1 border border-[gray] rounded-xl text-xs">
                                            { tag }
                                        </span>
                                    ))                                    
                                }                                    
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}