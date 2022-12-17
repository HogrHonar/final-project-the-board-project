import Team from "./Team";
import hogerhonar from '../imgs/hogrhonar.jpeg';
import roqayaamjad from '../imgs/roqayaamjad.jpeg';
import daryanaji from '../imgs/daryanajii.JPG';
import ramyaromed from '../imgs/ramyaromed.PNG';


export default function About(){
    return (
        <div className="about-text bg-neutral-900 p-7">
            <h1 className="text-white font-bold text-5xl p-3"> About Page</h1>
            <div className="w-1/5 h-1 bg-teal-900 my-7"></div>
            {/* <p className="text-white">'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, 
                
            </p> */}
            {/* <h2 className="text-white text-3xl font-bold">Our Team</h2> */}
            <div className="flex flex-wrap">
           
                <Team info={{image: hogerhonar, githubLink: "https://github.com/HogrHonar", name: "Hogr Honar",title:"Developer" , linkedInLink:"https://www.linkedin.com/in/hogr-honar/", dis: "Lorem ipsum is a placeholder text commonly."}} />
                <Team info={{image: roqayaamjad, githubLink: "https://github.com/rokayaamjaad", name: "Rokaya Amjad",title:"Developer" , linkedInLink:"https://www.linkedin.com/in/rokaya-amjaad-shawki-708608231/", dis: "Lorem ipsum is a placeholder text commonly."}} />
                <Team info={{image: daryanaji, githubLink: "https://github.com/daryanaji", name: "Darya Naji", title:"Developer", linkedInLink:"https://www.linkedin.com/in/darya-naji-2b6ba0198/", dis: "Lorem ipsum is a placeholder text commonly."}} />
                <Team info={{image: ramyaromed, githubLink: "https://github.com/ramagitup", name: "Ramyar Omed", title:"Developer", dis: "Lorem ipsum is a placeholder text commonly."}} />

            </div>
            

        </div>
        
    );
}