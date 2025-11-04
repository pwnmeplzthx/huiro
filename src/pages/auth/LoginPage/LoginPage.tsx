import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { Link } from "react-router-dom";
import { AuthLayout } from "../AuthLayout";
import { LoginForm } from "@/features/auth/LoginForm";

export function LoginPage() {
  return (
    <AuthLayout
      title="Вход в систему"
      description="Введите email и пароль"
      form={<LoginForm />}
      footer={
        <>
          Нет аккаунта?
          <Button asChild variant="link">
            <Link className="text-primary underline" to={ROUTES.REGISTER}>
              Зарегистрироваться
            </Link>
          </Button>
        </>
      }
    />
  );
}
