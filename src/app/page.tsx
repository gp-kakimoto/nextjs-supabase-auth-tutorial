//import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "../../lib/database.types.ts";

const Home = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  //セッションの取得
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="text-center text-x1">
      {user ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
};

export default Home;
