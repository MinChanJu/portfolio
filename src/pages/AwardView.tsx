import React from 'react'
import { Certificate, Prize } from '../types';

type AwardViewProps = {
    prizes: Prize[];
    certificates: Certificate[];
}

const AwardView: React.FC<AwardViewProps> = ({ prizes, certificates }) => {
    return (
        <div>
            <div className="big">Prizes and Certificates</div>

            <div className="info">수상</div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "28px" }}>번호</th>
                        <th>대회명</th>
                        <th>수상명</th>
                        <th>주관</th>
                        <th style={{ width: "90px" }}>수상일</th>
                    </tr>
                </thead>
                <tbody>
                    {prizes.map((prize, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{prize.name}</td>
                            <td>{prize.rank}</td>
                            <td>{prize.host}</td>
                            <td>{prize.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="info">자격증</div>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "28px" }}>번호</th>
                        <th>자격증명</th>
                        <th>점수/급수</th>
                        <th>발급처</th>
                        <th style={{ width: "90px" }}>취득일</th>
                    </tr>
                </thead>
                <tbody>
                    {certificates.map((certificate, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{certificate.name}</td>
                            <td>{certificate.score}</td>
                            <td>{certificate.issuer}</td>
                            <td>{certificate.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AwardView;