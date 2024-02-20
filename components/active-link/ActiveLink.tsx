"use client"
import Link from "next/link"
import styles from './ActiveLink.module.css'
import { usePathname } from "next/navigation"

interface Props {
    path: string,
    text: string
}


export default function ActiveLink({path, text}: Props) {

    const pathname = usePathname()


  return (
    <Link className={ pathname == path? styles['active-link'] : styles.link }
          href={path}
    >
        {text}
    </Link>

  )
}
