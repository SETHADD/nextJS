import Link from "next/link";

export default function Pet() {
  return (
    <div>
      <Link href="/pet/elephant">Elephant</Link>
      <ul>
        <li>Dog</li>
        <li>Cat</li>
        <li>mouse</li>
      </ul>
    </div>
  );
}
