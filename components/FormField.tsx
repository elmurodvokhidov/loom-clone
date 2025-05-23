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
    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>

            {as === "textarea" ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : as === "select" ? (
                <select id={id} name={id} value={value} onChange={onChange}>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </div>
    )
}