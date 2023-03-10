import { FcDataSheet } from 'react-icons/fc'
import { AiOutlineForm } from 'react-icons/ai'
import { MdOutlineQrCode2 } from 'react-icons/md'
import '../styles/machines.css'
import { Link } from "react-router-dom";


export default function CardMachine(prop){
    return (
        <div className="card1">
            <img src={prop.image} alt="Maquinas" />
            <div className="container1">
                <div className="button-div">
                    <Link to="/app/v1/listpage"><FcDataSheet /></Link>
                    <Link to="/app/v1/formpage"><AiOutlineForm /></Link>
                    <Link to="/app/v1/formqr"><MdOutlineQrCode2 /></Link>
                </div>
            </div>
        </div>
    )
}