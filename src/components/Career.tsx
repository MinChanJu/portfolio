import React from 'react'
import data from '../assets/data.json'
import './CSS/Portfolio.css'
import './CSS/Table.css'

const Career = React.forwardRef<HTMLDivElement>(({ }, ref) => {
    return (
        <div ref={ref}>
            <div className="big">Careers</div>
            
            <div className="info">경력</div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>구분</th>
                        <th>내용</th>
                        <th>기간</th>
                    </tr>
                </thead>
                <tbody>
                    {data.careers.map((career, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{career.class}</td>
                            <td style={{ textAlign: "start" }}>{career.description}</td>
                            <td>{career.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});

export default Career;