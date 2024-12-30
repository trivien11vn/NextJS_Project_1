'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
interface IProps {
    blogs: IBlog[]
}
const AppTable = (props: IProps) => {
    const {blogs} = props
    console.log(blogs)
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {blogs?.map((blog, index) => {
                    return  (<tr key={index}>
                                <td>{blog?.id}</td>
                                <td>{blog?.title}</td>
                                <td>{blog?.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant='warning' className='mx-3'>Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>)
                })}
            </tbody>
        </Table>
    );
}

export default AppTable