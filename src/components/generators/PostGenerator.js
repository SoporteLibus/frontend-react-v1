const PostGenerator = ({ post }) => {
    return (
        <tr className="trclass">
            <td className="tdclass" data-label="Battery Voltage">{post.r1}</td>
            <td className="tdclass" data-label="Engine Oil Pressure">{post.r2}</td>
            <td className="tdclass" data-label="Engine Coolant Temperature">{post.r3}</td>
            <td className="tdclass" data-label="Engine Run Time">{post.r4}</td>
            <td className="tdclass" data-label="Engine kW/Hours">{post.r5}</td>
            <td className="tdclass" data-label="Engine RPM">{post.r6}</td>
            <td className="tdclass" data-label="Phase A/B Volts">{post.r7}</td>
            <td className="tdclass" data-label="Phase B/C Volts">{post.r8}</td>
            <td className="tdclass" data-label="Phase C/A Volts">{post.r9}</td>
            <td className="tdclass" data-label="Total kW">{post.r10}</td>
            <td className="tdclass" data-label="Total kVA">{post.r11}</td>
            <td className="tdclass" data-label="Genarator Power Factor">{post.r12}</td>
            <td className="tdclass" data-label="Phase A kVAr">{post.r13}</td>
            <td className="tdclass" data-label="Phase B kVAr">{post.r14}</td>
            <td className="tdclass" data-label="Phase C kVAr">{post.r15}</td>
            <td className="tdclass" data-label="Total kVAr">{post.r16}</td>
            <td className="tdclass" data-label="Bus Output Frequency">{post.r17}</td>
            <td className="tdclass" data-label="Generator Output Frequency">{post.r18}</td>
            <td className="tdclass" data-label="Network Address">{post.r19}</td>
            <td className="tdclass" data-label="SYNC TIMEOUT Action">{post.r20}</td>
            <td className="tdclass" data-label="Phase A/Neutral Volts">{post.r55}</td>
            <td className="tdclass" data-label="Phase B/Neutral Volts">{post.r56}</td>
            <td className="tdclass" data-label="Phase C/Neutral Volts">{post.r57}</td>
            <td className="tdclass" data-label="Mains/Bus Phase A/Neutral Volts">{post.r58}</td>
            <td className="tdclass" data-label="Phase A Current">{post.r59}</td>
            <td className="tdclass" data-label="Phase B Current">{post.r60}</td>
            <td className="tdclass" data-label="Phase C Current">{post.r61}</td>
            <td className="tdclass" data-label="Phase A kVA">{post.r62}</td>
            <td className="tdclass" data-label="Phase B kVA">{post.r63}</td>
            <td className="tdclass" data-label="Phase C kVA">{post.r64}</td>
            <td className="tdclass" data-label="Voltage Bias Analog Output">{post.r65}</td>
            <td className="tdclass" data-label="Speed Bias Analog Output">{post.r66}</td>
            <td className="tdclass" data-label="Load Control Mode">{post.r67}</td>
            <td className="tdclass" data-label="Synchronizer Mode">{post.r68}</td>
            <td className="tdclass" data-label="Number Of Unacknowledged Alarms">{post.r69}</td>
            <td className="tdclass" data-label="Unit Network Priority">{post.r70}</td>
            <td className="tdclass" data-label="Current Master Unit">{post.r71}</td>
            <td className="tdclass" data-label="Engine Status">{post.r72}</td>
            <td className="tdclass" data-label="Synchroscope">{post.r73}</td>
            <td className="tdclass" data-label="Charge Priority">{post.r74}</td>
        </tr>
    )
}
export default PostGenerator;