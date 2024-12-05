import React from 'react'

const ProjectId = async ({
	params,
}: {
	params: Promise<{ projectId: string }>
}) => {
	const projectId = (await params).projectId

	return <div>ProjectId: {projectId}</div>
}

export default ProjectId
