import React from 'react';

const About = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) => {
                        return <tr key={item.password}>
                            <td>{index+1}</td>
                            <td>{item.user}</td>
                            <td>{item.age}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default About;