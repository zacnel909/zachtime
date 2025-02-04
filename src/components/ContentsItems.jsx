import React from "react";
import ContentsItem from "./ContentsItem";


export default function ContentsItems(props){
    return (<>
        {props.contents.map((content, index) => (
            <ContentsItem
                key={(content.to || content) + index}
                enum={`${index + 1}.`}
                label={content.label || content.to || content}
                to={content.to || content}
            />
        ))}
    </>)
}
