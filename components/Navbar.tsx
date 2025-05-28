"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const user = session?.user;

    return (
        <header className="navbar">
            <nav>
                <Link href="/">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />

                    <h1>Loomy</h1>
                </Link>

                {user && (
                    <figure>
                        <button onClick={() => router.push(`/profile/${user?.id}`)}>
                            <Image
                                src={user?.image || ""}
                                alt="user"
                                width={36}
                                height={36}
                                className="rounded-full aspect-square"
                            />
                        </button>

                        <button className="cursor-pointer">
                            <Image
                                src="/assets/icons/logout.svg"
                                alt="logout"
                                width={24}
                                height={24}
                                className="rotate-180"
                            />
                        </button>
                    </figure>
                )}
            </nav>
        </header>
    )
}