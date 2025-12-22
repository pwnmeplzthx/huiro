import { Link } from "react-router-dom";

import { RegisterForm } from "@/features/auth/RegisterForm";
import { ROUTES } from "@/shared/model/routes";
import { Button } from "@/shared/ui/kit/button";
import { AuthLayout } from "@/widgets/AuthLayout";

export function RegisterPage() {
  return (
    <AuthLayout
      title="Регистрация"
      description="Введите email и пароль"
      form={<RegisterForm />}
      footer={
        <>
          Уже есть аккаунт?
          <Button asChild variant="link">
            <Link className="text-primary underline" to={ROUTES.LOGIN}>
              Войти
            </Link>
          </Button>
        </>
      }
    />
  );
}
