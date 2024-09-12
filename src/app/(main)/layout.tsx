import Navbar from "@/app/(main)/components/Navbar";
import SessionProvider from "@/app/(main)/providers/SessionProvider";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, session } = await validateRequest();
  if (!user) return redirect("/login");
  return (
    <SessionProvider value={{ user, session }}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto max-w-7xl p-5"> {children}</div>
      </div>
    </SessionProvider>
  );
}
