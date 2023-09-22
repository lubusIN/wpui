import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>
        WPUI Components
      </h1>
      <ul>
        <li>
          <Link href="/header">Edit Title</Link>
        </li>
        <li>
          <Link href="/navigation">Page Navigation</Link>
        </li>
        <li>
          <Link href="/payment">Payment</Link>
        </li>
        <li>
          <Link href="/signup">Sign In</Link>
        </li>
        <li>
          <Link href="/subscription">Subscription</Link>
        </li>
        <li>
          <Link href="/new-project">Add Project</Link>
        </li>
        <li>
          <Link href="/selectbox">Select Option</Link>
        </li>
        <li>
          <Link href="/chart">Charts</Link>
        </li>
        <li>
          <Link href="/tabs">Custom Tab</Link>
        </li>
        <li>
          <Link href="/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link href="/view">View Tasks</Link>
        </li>
      </ul>
    </main>
  )
}
