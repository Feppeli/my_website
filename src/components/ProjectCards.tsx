type CardProps = {
    title: string;
    description: string;
    projectAdress: string;
    imagesrc: string;
    technologys: string
}


const ProjectCards = ({ title, description, imagesrc, projectAdress, technologys }: CardProps) => {

    const techList = technologys.split(',').map(item => item.trim());

    const handleRedirectToProject = (e: React.MouseEvent<HTMLButtonElement>, projectAdress: string) => {
        e.preventDefault();

        window.open(projectAdress, '_black')

    }

    return (
        <div className="flex flex-col md:justify-between border-1 border-gray-400 rounded p-2 md:p-4 md:w-80 md:min-h-130 md:h-full">
            <div>
                <img src={imagesrc} alt="" className="md:w-full md:h-full" />
            </div>
            <div className="pb-2 md:min-h-70 md:mt-1">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm text-gray-400 ">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4 mt-2 md:mb-0">
                    {techList.map((tech, key) => {
                        return <p key={key} className="border-1 border-gray-600 pr-4 pl-4 p-1 rounded-full" >{tech}</p>
                    })}
                </div>

            </div>
            <div className="md:flex md:w-full md:h-full md:bg-red">
                <button onClick={(event) => handleRedirectToProject(event, projectAdress)} className="bg-white rounded text-black font-bold p-2 w-full mt-auto">Saiba mais</button>
            </div>
        </div>
    )
}

export default ProjectCards;