import React from 'react'

const ProjectId = async ({ params }) => {
	const projectId = (await params).projectId

	return <div>ProjectId: {projectId}</div>
}

export default ProjectId
