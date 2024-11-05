import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/6/");
  const pokemones = await data.json();
  console.log(pokemones);

  return (
    <>
      <h1>Pokemon API</h1>
      <Card className="w-[300px] flex flex-col items-center justify-center">
        <CardHeader className="flex flex-col items-center">
          <CardTitle className="text-center">{pokemones.name}</CardTitle>
          <CardContent className="flex flex-col items-center">
            <Image
              src={pokemones.sprites.front_default}
              alt="Pokemon"
              width={100}
              height={100}
            />
            <p className="text-center">Peso: {pokemones.weight}</p>
          </CardContent>
        </CardHeader>
      </Card>
    </>
  );
}
