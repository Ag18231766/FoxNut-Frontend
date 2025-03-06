import { useState } from 'react';
import { FooterComp } from './FooterComp';

// 1. Define the ContentInterface
interface ContentInterface {
    title: string;
    content: string;
    key:number
}
interface WrapperProps{
    heading:string
    arr:ContentInterface[]
}

export default function Wrapper({arr,heading}:WrapperProps) {
    // 2. Initialize with actual content (or leave empty if truly desired)
    const [Content] = useState<ContentInterface[]>(arr);

    return (
        <div>
            <div className="h-full mt-6 mb-10">
                <div className="flex justify-center">
                    <div className="w-7xl bg-gray-100">
                        <div className="flex justify-center"><div className="text-gray-600 text-6xl mt-7">{heading}</div></div>
                        {Content.map((item) => (
                            <ContentComponent key={item.key} title={item.title} content={item.content} />
                        ))}
                    </div>
                </div>
            </div>
            <FooterComp></FooterComp>
        </div>
    );
}

// 3. Rename the function component to ContentComponent to avoid naming conflicts
function ContentComponent({ title, content }: { title: string; content: string }) {
    return (
        <div>
            <div className="text-xl text-gray-600 mt-8">{title}</div>
            <div className="">{content}</div>
        </div>
    );
}
