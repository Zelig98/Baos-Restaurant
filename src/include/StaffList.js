
const StaffList = ({emps}) => {
    
    return (
        <tbody>
            {emps.map((emp) => ( 
                <tr>
                    <td>{emp.id}</td>
                    <td>{emp.last_name}</td>
                    <td>{emp.first_name}</td>
                    <td>{emp.username}</td>
                    <td>{emp.Role}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default StaffList;