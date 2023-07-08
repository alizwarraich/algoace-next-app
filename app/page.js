import Link from "next/link";

const Homepage = () => {
    return (
        <div>
            <h1>Welcome to Next.js App</h1>
            <ul>
                <li>
                    <Link className="text-blue-600 underline" href="/about">
                        About &rarr;
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Homepage;
