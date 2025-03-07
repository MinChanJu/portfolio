import React from 'react'
import { career } from '../types/careers';

type CareerProps = {
    careers: career[];
}

const Career = React.forwardRef<HTMLDivElement, CareerProps>(({ careers }, ref) => {
    return (
        <div ref={ref}>
            <div className="big">Careers</div>

            <div className="info">경력</div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th style={{width:"28px"}}>번호</th>
                        <th style={{width:"74px"}}>구분</th>
                        <th>내용</th>
                        <th style={{width:"140px"}}>기간</th>
                    </tr>
                </thead>
                <tbody>
                    {careers.map((career, index) => (
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