import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import FormSection from '../../lib/FormSection'
import styled from "styled-components";

export const MobileForm = styled.div`
    margin: 10px;
    min-width: 30em;
    @media screen and (max-width: 800px) {
        margin: 10px;
        min-width: 20em;
    }
    @media screen and (max-width: 450px) {
        margin: 10px;
        min-width: 10em;
    }
`;

function Input() {
    return (
        <MobileForm>
            <label><Skeleton baseColor={"var(--color-gris)"} width={"50%"} /></label>
            <div>
                <div><Skeleton baseColor={"var(--color-gris)"} /></div>
            </div>
        </MobileForm>
    )
}

export const skeletonGenerators = () => {
        return (
            <div className="main-container-generators">
            <h1>Cargando datos:</h1>
            <table className="table-cls">
                <thead className='theadclass'>
                    <tr className='trclass'>
                        <th className='thclass'>Battery Voltage</th>
                        <th className='thclass'>Engine Oil Pressure</th>
                        <th className='thclass'>Engine Coolant Temperature</th>
                        <th className='thclass'>Engine Run Time</th>
                        <th className='thclass'>Engine kW/Hours</th>
                        <th className='thclass'>Engine RPM</th>
                        <th className='thclass'>Phase A/B Volts</th>
                        <th className='thclass'>Phase B/C Volts</th>
                        <th className='thclass'>Phase C/A Volts</th>
                        <th className='thclass'>Total kW</th>
                        <th className='thclass'>Total kVA</th>
                        <th className='thclass'>Genarator Power Factor</th>
                        <th className='thclass'>Phase A kVAr</th>
                        <th className='thclass'>Phase B kVAr</th>
                        <th className='thclass'>Phase C kVAr</th>
                        <th className='thclass'>Total kVAr</th>
                        <th className='thclass'>Bus Output Frequency</th>
                        <th className='thclass'>Generator Output Frequency</th>
                        <th className='thclass'>Network Address</th>
                        <th className='thclass'>SYNC TIMEOUT Action</th>
                        <th className='thclass'>Phase A/Neutral Volts</th>
                        <th className='thclass'>Phase B/Neutral Volts</th>
                        <th className='thclass'>Phase C/Neutral Volts</th>
                        <th className='thclass'>Mains/Bus Phase A/Neutral Volts</th>
                        <th className='thclass'>Phase A Current</th>
                        <th className='thclass'>Phase B Current</th>
                        <th className='thclass'>Phase C Current</th>
                        <th className='thclass'>Phase A kVA</th>
                        <th className='thclass'>Phase B kVA</th>
                        <th className='thclass'>Phase C kVA</th>
                        <th className='thclass'>Voltage Bias Analog Output</th>
                        <th className='thclass'>Speed Bias Analog Output</th>
                        <th className='thclass'>Load Control Mode</th>
                        <th className='thclass'>Synchronizer Mode</th>
                        <th className='thclass'>Number Of Unacknowledged Alarms</th>
                        <th className='thclass'>Unit Network Priority</th>
                        <th className='thclass'>Current Master Unit</th>
                        <th className='thclass'>Engine Status</th>
                        <th className='thclass'>Synchroscope</th>
                        <th className='thclass'>Charge Priority</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        )
}

export const skeletonGeneratorExtra = () => {
        return (
            <div className="main-container-generators">
            <h1>Cargando datos:</h1>
            <table className="table-cls">
                <thead className='theadclass'>
                    <tr className="trclass">
                        <th>rtp</th>
                        <th>rt1</th>
                        <th>rt2</th>
                        <th>rt3</th>
                        <th>rtplh</th>
                        <th>rt1lh</th>
                        <th>rt2lh</th>
                        <th>rt3lh</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    <tr className="trclass">
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                        <td className='tdclass'><Skeleton baseColor={"var(--color-gris)"} /></td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        )
}

export const skeletonListPage = () => {
    return (
        <div className="main-container-generators">
            <div className="div-fecha">
                <header>
                    <br/>
                        <div>
                            <Skeleton baseColor={"var(--color-gris)"} />
                        </div>
                    <br/>
                </header>
            </div>

            <br />
            <form>
            <FormSection title="Cargando datos">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
            </FormSection>
            <div className="div-enviar">
                <div><Skeleton baseColor={"var(--color-gris)"} width={"50%"} /></div>
            </div>
            </form>
        </div>
    )
}