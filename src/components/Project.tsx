import React from 'react'
import { IMG } from './URLManage'
import CustomLink from './CustomLink'
import './CSS/Portfolio.css'
import './CSS/Image.css'

type project = {
    project: string
    time: string
    people: number
    skills: string
    description: string
    sourcecode: string[]
    site: string
    img: string[]
}

type ProjectProps = {
    index: number
    project: project
}

const Project = React.forwardRef<HTMLDivElement, ProjectProps>(({ index, project }, ref) => {
    return (
        <div ref={ref}>
            <div className="big">Project {index + 1}</div>
            
            <div className="info">{project.project}</div>
            <hr />
            <br />
            <div className="subinfo">
                <div>개발기간 : {project.time}</div>
                <div>개발인원 : {project.people}명 </div>
                <div>사용기술 : {project.skills}</div>
                <div>설명 : {project.description}</div>
                {project.sourcecode.map((href, index) => (
                    <div key={index}>소스코드 : <CustomLink href={href} /></div>
                ))}
                {project.site && <div>사이트 : <CustomLink href={project.site} /></div>}
                {project.img.reduce((acc, src, index) => {
                    let groupIndex = Math.floor(index / (project.img.length > 3 ? 2 : 3));
                    if (!acc[groupIndex]) {
                        acc[groupIndex] = [];
                    }
                    acc[groupIndex].push(src);
                    return acc;
                }, [] as string[][]).map((group, groupIndex) => (
                    <div key={groupIndex} className="imageContainer">
                        {group.map((src, index) => (
                            <img
                                key={index}
                                style={{
                                    width: `${100 / group.length - ((group.length - 1) * 2)}%`,
                                }}
                                src={IMG[src]}
                                alt={`project_image_${groupIndex + 1}_${index + 1}`}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <br /><br />
        </div>
    );
});

export default Project;