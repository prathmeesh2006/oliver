import { redirect } from "next/navigation";

export default function AuthenticityGuaranteePage() {
  redirect("/about#heritage");
}

