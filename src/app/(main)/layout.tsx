import Navbar from "@/app/(main)/components/Navbar";
import SessionProvider from "@/app/(main)/providers/SessionProvider";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import MenuBar from "./components/MenuBar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Main page',
};
export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, session } = await validateRequest();
  if (!user) return redirect("/login");
  return (
    <SessionProvider value={{ user, session }}>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        <div className="mx-auto flex max-w-7xl w-full p-5 grow gap-5">
          <MenuBar className="sticky top-[5.25rem] h-fit hidden sm:block flex-none space-3 rounded-2xl bg-card px-3 py-4 lg:px-10 shadow-sm xl:w-80" />
          {children}
        </div>
        <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p3 sm:hidden" />
      </div>
    </SessionProvider>
  );
}
