import ListArticle from '@/app/components/article/ListArticle';
import { useEffect, useState } from 'react';

export default function IndexPage() {
    
    return (
        <>  
            <div className="mx-auto w-[1160px]">
                
                <div className="grid grid-cols-12 gap-x-4 mt-4">
                    <div className="col-span-9">
                        <ListArticle/>
                    </div>
                </div>
            </div>            
        </>
    )
}