import LoginForm from "../components/login-component/login-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.replace("/");
    return <div></div>;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
