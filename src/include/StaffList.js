
const StaffList = ({emps}) => {
    
    return (
        <tbody>
            {emps.map((emp) => ( 
                <tr>
                    <td>{emp.id}</td>
                    <td>{emp.last_name}</td>
                    <td>{emp.first_name}</td>
                    <td>{emp.username}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.role}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default StaffList;