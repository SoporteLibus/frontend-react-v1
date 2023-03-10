import "../styles/formPage.css"

export default function Form(prop) {
    return (
        <div className="div-form-init">
            <div className="div-form">
                <h2 className="h2class">{prop.title}</h2>
                <form action={prop.action} method={prop.method} name={prop.name}>
                    {prop.children}
                    <div className={prop.classButton}>
                        <button type="submit" className="guardar">{prop.nameButton}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}