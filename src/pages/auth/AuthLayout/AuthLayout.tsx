
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/kit/card";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  form: ReactNode;
  title: ReactNode;
  description: ReactNode;
  footer: ReactNode;
}

export function AuthLayout({
  form,
  title,
  description,
  footer,
}: AuthLayoutProps) {
  return (
    <main className="grow flex flex-col items-center pt-[200px]">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{form}</CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">{footer}</p>
        </CardFooter>
      </Card>
    </main>
  );
}
