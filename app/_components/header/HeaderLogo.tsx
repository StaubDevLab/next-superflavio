import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function HeaderLogo() {
    return (

            <div className={'flex items-center gap-2'}>

                <Link href={'/'}><Image src={'/logo.png'} width={100} height={100}  className={"transition-transform duration-500 ease-in-out hover:scale-110"} alt={'Logo représentant un soleil'}/></Link>
            </div>

    );
}