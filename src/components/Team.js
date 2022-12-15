export default function Team({image, githubLink, name}){
    return (
        <div>
            {/* <img src={image} alt="team member"> Home Page</img>
            <link>{name}</link> */}
            <a href={githubLink} target="_blank" rel="noreferrer">
                 <img src={image} alt={name} />
            </a>
            <h4>{name}</h4>
        </div>

    );
}