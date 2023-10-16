import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import {Button, ButtonGroup} from "@nextui-org/react";
import styles from '../styles/styles.module.css'
export default function Home() {
  const { data: sessionData } = useSession();

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
        <div
        className={`min-h-screen w-full h-full absolute top-0 left-0 ${styles['slow-gif']}`}
        style={{
          backgroundImage: 'url(/vr.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)',
          transform: 'scale(1.3)', 
          zIndex: -10, 
        }}
      />
      <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center">
      <Head>
        <title>Orion - Desenvolvimento de Jogos em VR</title>
        <meta name="description" content="[Descrição da sua empresa]" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-4">Bem-vindo à Orion!</h1>
        <p className="text-lg mb-8">Transformando sonhos em experiências de realidade virtual envolventes.</p>

        <div className="flex gap-4 mb-8">
          <Link href="/portfolio">
            <p className="text-blue-500 hover:underline">Veja nosso portfólio</p>
          </Link>
          <span>/</span>
          <Link href="/contato">
            <p className="text-blue-500 hover:underline">Entre em contato</p>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4">
          {sessionData ? (
            <div className="text-lg mb-2">Olá, {sessionData.user?.name}!</div>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full"
              onClick={() => signIn()}
            >
              Entrar
            </button>
          )}

          {sessionData && (
            <button
              className="text-blue-500 hover:underline"
              onClick={() => signOut()}
            >
              Sair
            </button>
          )}
        </div>
      </main>
    </div>
    </div>
  );
}
