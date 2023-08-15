import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>All About the Pets</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pet">Pet</Link>
      </nav>
    </header>
  );
}
