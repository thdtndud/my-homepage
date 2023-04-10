import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>Welcome to Sooyoung's Page!</h2>
            <ul>
                <li>Birth: 2003/11/9 in Japan(but Korean!)</li>
                <li>Elementary School(1) : Totsuka Daiichi Elementary School</li>
                <li>Elementary School(2) : Tokyo Korean School</li>
                <li>Junior High School : Yohan International Christian School</li>
                <li>High School : Tokyo Metropolitan Kokusai High School</li>
            </ul>
            <h5>Thank you for visiting my webpage :)</h5>
            <Link href="/">Back to home</Link>
        </div>
    )
}