"use client"
import CounterCard from "@/components/CounterCard";
import NameCard from "@/components/NameCard";
import UserCard from "@/components/UserCard";
import VisibilityCard from "@/components/VisibilityCard";

export default function Page() {

  return (
    <main className="p-5 flex flex-col gap-5">
      <div className="flex gap-5">
        <CounterCard />
        <NameCard />
      </div>
      <div className="flex gap-5">
        <UserCard />
        <VisibilityCard />
      </div>
    </main>
  )
}