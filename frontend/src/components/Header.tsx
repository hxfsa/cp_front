import Link from "next/link";

export default function Header() {
  return (
    <header className="header h-24 bg-red-600">
      <h1 className="h1header">Checkpoint : frontend</h1>
      <Link href="/">Countries</Link>
    </header>
  );
}
