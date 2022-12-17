import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFaceb } from '@fortawesome/free-solid-svg-icons' 
import github from '../imgs/github.png'
import linkedin from '../imgs/linkedin.png'
import fb from '../imgs/fb.png'


export default function Team({info}){
    return ( 
        
       
        <div className=" border-2 rounded-2xl bg-black flex justify-center items-center flex-col shadow-white mb-7" style={{width:"30%"}}>
            {/* <img src={image} alt="team member"> Home Page</img>
            <link>{name}</link> */}
            <div className="border-1">
            <a href={info.githubLink} target="_blank" rel="noreferrer">
                 <img className="rounded-full w-32 mt-4 border-2 shadow-lg shadow-teal-500/50" src={info.image} alt={info.name} />
            </a>
            </div>

            <h4 className="text-white my-3 text-2xl font-bold">{info.name}</h4>
            <h5 className="text-neutral-600 my-3">{info.title}</h5>
            <div className="w-1/2 h-1 bg-teal-900 my-4"></div>
            <p className="text-white">{info.dis}</p>
            <p className="text-white my-4">{info.bio}</p>
            <div className="flex justify-evenly w-1/2 mb-4" >
                <div className="text-white w-full"> <a href={info.githubLink}><img src={github}></img></a></div>
                <div className="text-white w-full"> <a href={info.linkedInLink}><img src={linkedin}></img></a></div>
                <div className="text-white w-full"> <a href={info.facebook}><img src={fb}></img></a></div>
            </div>
        </div>
        

    );
}