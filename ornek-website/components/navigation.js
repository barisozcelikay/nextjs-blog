import Link from "next/link";
function Navigation() {
    return <nav>
        <Link href = "/">
            <a>Ana Sayfa </a>

        </Link>
        <Link href = "/posts/first-post">
            <a>Hakkımda</a>
        </Link>
    </nav>
}

export default Navigation