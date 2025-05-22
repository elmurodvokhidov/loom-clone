export default function FormField({
    id,
    label,
    value,
    type = "text",
    onChange,
    placeholder,
    as = "input",
    options = [],
}: FormFieldProps) {
    const InputToRender = ({ type }: { type: string }) => {
        if (type === "textarea") {
            return <textarea
                id={id}
                name={id}
                value={value}
                onChange={onChange}
            />
        } else if (type === "select") {
            return <select
                id={id}
                name={id}
                value={value}
                onChange={onChange}
            >
                {options.map(({ label, value }) => (
                    <option key={label} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        } else {
            return <input
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        }
    }

    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>

            <InputToRender type={as} />
        </div>
    )
}