"use client";

import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { ChangeEvent, useState } from "react";

export default function page() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        visibility: "public",
    });
    const [error, setError] = useState(null);

    const handleInputChange = (e: ChangeEvent) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <div className="wrapper-md upload-page">
            <h1>Upload a video</h1>

            {error && <div className="error-field">{error}</div>}

            <form className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5">
                <FormField
                    id="title"
                    label="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter a clear and concise video title"
                />

                <FormField
                    id="description"
                    label="Description"
                    value={formData.description}
                    onChange={handleInputChange}
                    as="textarea"
                    placeholder="Describe what this video is about"
                />

                <FileInput />

                <FileInput />

                <FormField
                    id="visibility"
                    label="Visibility"
                    value={formData.visibility}
                    onChange={handleInputChange}
                    as="select"
                    options={[
                        { value: "public", label: "Public" },
                        { value: "private", label: "Private" },
                    ]}
                />
            </form>

        </div>
    )
}