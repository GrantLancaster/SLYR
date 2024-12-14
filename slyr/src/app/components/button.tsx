'use client'

import { useState } from "react";

export default function Button(
    {
        buttonText,
        className,
    }:{
        buttonText: string;
        className: string;
        //saveState: React.SetStateAction<string>;
    }

) {

    const [loot, setLoot] = useState<string>("none")

    return (
        <>
        <button
        className={className}
            onClick={()=>{setLoot("new Loot")}}
        >
            {buttonText}
        </button>
        <p>{loot}</p>
        </>
    )
}