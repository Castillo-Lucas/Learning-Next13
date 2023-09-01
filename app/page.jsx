import MainButton from "@/components/MainButton";

//Este es el home, la parte principal
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center text-4xl">Probando Next 13</h1>
        <p className="text-center">Esta es la página principal</p>
        <MainButton />
      </div>
    </main>
  );
}
