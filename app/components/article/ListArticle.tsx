'use client'

import { useEffect, useState } from 'react';
// import  mainRepository from '@/app/services/api';

export default function ListArticle({ data }) {
    const [listArticle, setListArticle] = useState(data);
    // const [totalArticle, setTotalArticle] = useState(0);
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await mainRepository.getAllArticles();
    //         if (result.success && result.data) {
    //             setListArticle(result.data.articles);
    //         }
    //     }
    //     fetchData();
    // }, []);
    
    return (        
        <div>
            {listArticle?.map((article, articleIdx) => (
                <div key={articleIdx} className="border-t border-[lightgray] py-4">
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
                                <img className="" src={article?.author?.image} alt=""/>
                            </div>
                            <div className="max-w-[2000px] overflow-hidden">
                                <p className="text-[#5CB85C] text-sm hover:underline">{ article?.author?.username ?? '' }</p>
                            </div>
                        </div>
                        <div className="rounded-md border border-[#5CB85C] min-w-[60px] min-h-[26px] flex items-center justify-center gap-2 px-1">
                            <img className="w-[15px] h-[15px]" src="/assets/heart.svg" alt="" />
                            <p className="text-[#5CB85C] text-sm">{ article?.favoritesCount }</p>
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
            ))}
        </div>
    )
}