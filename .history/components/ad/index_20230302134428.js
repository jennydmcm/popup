import styles from './ad.module.css'
import { useState } from 'react'


export default function ad() {
    const [popup, usePopup] = useState(true);

    return (
        <>
            {
                popup ?
                    <div>
                        <div>
                            <div></div>
                            <h1>Welcome</h1>
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}