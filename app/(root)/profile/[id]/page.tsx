import Header from "@/components/Header";

export default async function page({ params }: ParamsWithSearch) {
    const { id } = await params;

    return (
        <div className="wrapper page">
            <Header
                subHeader="elmurod@gmail.com"
                title="Elmurod"
                userImg="/assets/images/dummy.jpg"
            />
        </div>
    )
}