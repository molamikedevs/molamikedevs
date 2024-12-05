import React from 'react'

const ProjectId = ({ params }: { params: { projectId: string } }) => {
	const { projectId } = params
	return <div>ProjectId: {projectId}</div>
}

export default ProjectId
