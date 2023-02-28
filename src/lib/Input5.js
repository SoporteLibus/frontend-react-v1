export default function Input(prop) {
    return (
        <div className="form-group">
            <label>{prop.title}:</label>
            <div className="group marginx10">
                <input id={prop.id1} type="text" className="form-control" placeholder={prop.placeholder} required={prop.required} />
            </div>
            <div className="group marginx10">
                <input id={prop.id2} type="text" className="form-control" placeholder={prop.placeholder} required={prop.required} />
            </div>
            <div className="group marginx10">
                <input id={prop.id3} type="text" className="form-control" placeholder={prop.placeholder} required={prop.required} />
            </div>
            <div className="group marginx10">
                <input id={prop.id4} type="text" className="form-control" placeholder={prop.placeholder} required={prop.required} />
            </div>
            <div className="group marginx10">
                <input id={prop.id5} type="text" className="form-control" placeholder={prop.placeholder} required={prop.required} />
            </div>
            
        </div>
    )
}