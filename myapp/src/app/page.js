"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main>
      <h1>hello</h1>
      <button onClick={() => navigate('/login')}>login</button>
      <button onClick={() => navigate('/about')}>about</button>
    </main>
  );
}
