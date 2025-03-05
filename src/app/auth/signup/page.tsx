import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import Signup from "@/app/components/signup";
import type { Database } from "../../../../lib/database.types";

// サインアップページ
const SignupPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  // セッションの取得
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 認証している場合、リダイレクト
  if (user) {
    redirect("/");
  }

  return <Signup />;
};
export default SignupPage;
