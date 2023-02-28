export default function FormSection(prop) {
    return (
        <div className="div-form">
            <div className="div-block">
                <div className="div-block-title">
                    <h3>{prop.title}:</h3>
                </div>
                <div className="div-block-content">
                    {prop.children}
                </div>
            </div>
        </div>
    )
}