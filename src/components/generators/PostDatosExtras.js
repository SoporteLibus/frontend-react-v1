const PostDatosExtras = ({ post }) => {
    return (
        <tr className="trclass">
            <td className="tdclass" data-label="#">{post.rtp}</td>
            <td className="tdclass" data-label="#">{post.rt1}</td>
            <td className="tdclass" data-label="#">{post.rt2}</td>
            <td className="tdclass" data-label="#">{post.rt3}</td>
            <td className="tdclass" data-label="#">{post.rtplh}</td>
            <td className="tdclass" data-label="#">{post.rt1lh}</td>
            <td className="tdclass" data-label="#">{post.rt2lh}</td>
            <td className="tdclass" data-label="#">{post.rt3lh}</td>
        </tr>
    )
}
export default PostDatosExtras