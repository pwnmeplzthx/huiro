import { Link } from "react-router-dom";

// eslint-disable-next-line boundaries/entry-point
import { LoginForm } from "@/features/auth/LoginForm";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { AuthLayout } from "@/widgets/AuthLayout";

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
