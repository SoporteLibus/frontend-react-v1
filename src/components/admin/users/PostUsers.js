const PostUsers = ({ post }) => {
    return (
        <tr className="trclass">
            <td className="tdclass" data-label="#">{post.name}</td>
            <td className="tdclass" data-label="#">{post.age}</td>
            <td className="tdclass" data-label="#">{post.email}</td>
            <td className="tdclass" data-label="#">{post.role}</td>
            <td className="tdclass" data-label="#">{post.status}</td>
        </tr>
    )
}
export default PostUsers