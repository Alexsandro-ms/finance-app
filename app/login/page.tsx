import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-[100vh] grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src={"/logo.svg"}
          width={173}
          height={39}
          alt="Finance App"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A Finance App é uma web aplicação de gestão de finanças, que utiliza
          Inteligência artificial para monitorar suas movimentações, oferecer
          insights personalizados, facilitando o controle de seu orçamento e
          finanças.
        </p>
        <Button variant={"outline"}>
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={"/login.png"}
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
