import { ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "./DropdownList";

export default function Header({
    subHeader,
    title,
    userImg,
}: SharedHeaderProps) {
    return (
        <header className="header">
            <section className="header-container">
                <div className="details">
                    {userImg && (
                        <Image
                            src={userImg}
                            alt="user"
                            width={66}
                            height={66}
                            className="rounded-full"
                        />
                    )}

                    <article>
                        <p>{subHeader}</p>
                        <h1>{title}</h1>
                    </article>
                </div>

                <aside>
                    <Link href="/upload">
                        <Image
                            src="/assets/icons/upload.svg"
                            alt="upload"
                            width={16}
                            height={16}
                        />

                        <span>Upload a video</span>
                    </Link>

                    <div className="record">
                        <button className="primary-btn">
                            <Image
                                src={ICONS.record}
                                alt="record"
                                width={16}
                                height={16}
                            />

                            <span>Record a video</span>
                        </button>
                    </div>
                </aside>
            </section>

            <section className="search-filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for videos, tags, folders..."
                    />

                    <Image
                        src="/assets/icons/search.svg"
                        alt="search"
                        width={16}
                        height={16}
                    />
                </div>

                <DropdownList />
            </section>
        </header>
    )
}