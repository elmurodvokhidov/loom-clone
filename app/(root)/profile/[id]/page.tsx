import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

export default async function page({ params }: ParamsWithSearch) {
    const { id } = await params;

    return (
        <div className="wrapper page">
            <Header
                subHeader="elmurod@gmail.com"
                title="Elmurod"
                userImg="/assets/images/dummy.jpg"
            />

            <section className="video-grid">
                {dummyCards.map((card) => (
                    <VideoCard {...card} key={card.id} />
                ))}
            </section>
        </div>
    )
}