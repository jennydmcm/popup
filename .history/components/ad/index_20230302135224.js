import styles from './ad.module.css'
import { useState } from 'react'


export default function Ad() {
    const [popup, setPopup] = useState(true);

    return (
        <>
            {
                popup ?
                    <div className={styles.container}>
                        <div className={styles.popup_area}>
                            <div onClick={() => setPopup(false)}>Close</div>
                            <h1>Welcome</h1>
                        </div>
                    </div>
                    : <></>
            }n
        </>
    )
}