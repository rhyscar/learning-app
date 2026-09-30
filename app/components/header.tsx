import Link from "next/link";

export default function Header() {
    return (
          <nav>
            <ul className="flex space-x-40 p-5 bg-green-500">
                <ul>
                    <li className="text-2xl transition-colors duration-300 hover:text-green-700">Rhys Carroll</li>
                    <li className="transition-colors duration-300 hover:text-green-700">Developer</li>
                </ul>
                <li className="flex-initial p-5"><Link className="transition-colors duration-300 hover:text-green-700" href="/about">About</Link></li>
            </ul>
        </nav>
    );
}