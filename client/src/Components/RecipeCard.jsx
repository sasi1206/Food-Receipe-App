import { IoMdHeartEmpty } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { GoBook } from 'react-icons/go';

const RecipeCard = ({ id , name , description , image , level , time , nationality , chefName , chefPfp , rating , reviews })=>{
    return (
        <section className="border-1 group border-[#e5e7eb] rounded-2xl w-[24rem] hover:shadow-md transition-transform transition-discrete hover:-translate-y-1 cursor-pointer max-sm:w-full" key={id}>
            <section className="relative overflow-hidden rounded-t-2xl">
                <img src={image} alt={name} className="h-40 object-cover rounded-t-2xl w-full transition-transform transition-discrete group-hover:scale-105" />
                <section className="w-full absolute top-0 p-4 flex items-center justify-between">
                    <p className={`bg-white pt-1 pb-1 pr-2.5 pl-2.5 rounded-2xl font-semibold text-xs ${level === 'Easy' ? 'bg-[#dcfce7] text-[#16a34a]': level === 'Medium' ? 'bg-[#fef9c3] text-[#ca8a04]' : level === 'Hard' ? 'bg-[#fee2e2] text-[#dc2626]' : ''}`}>{level}</p>
                    <button className="bg-[#ffffffcc] p-2 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white">
                        <IoMdHeartEmpty size={17} className="hover:text-[#dc2626]"/>
                    </button>
                </section>
            </section>
            <section className="p-5 flex flex-col gap-4 justify-center">
                <section className='flex w-full justify-between'>
                    <p className="font-semibold text-primary">{nationality}</p>
                    <p className="flex items-center gap-2 text-gray-600">
                        <FiClock />
                        <span>{time}</span>
                    </p>
                </section>
                <h3 className="font-black group-hover:text-primary">{name}</h3>
                <p className="text-gray-600 leading-5">{description}</p>
                <section className="w-full flex justify-between items-center">
                    <section className="flex items-center gap-1.5">
                        <CiStar size={20} color="rgb(250 204 21)" fill="black"/>
                        <p className="font-bold">{rating}</p>
                        <p className="text-grey-600">({reviews})</p>
                    </section>
                    <section className="flex items-center gap-2">
                        <img src={chefPfp} alt={chefName} className="w-10 h-10 rounded-full overflow-hidden" />
                        <p className="text-gray-600">{chefName}</p>
                    </section>
                </section>
                <button className="cursor-pointer bg-primary border-1 border-primary px-0 py-3 rounded-xl flex justify-center items-center text-white gap-2 font-bold hover:bg-[#1d4ed8] hover:border-[#1d4ed8]">
                    <GoBook size={20}/>
                    <span>View Recipe</span>
                </button>
            </section>
        </section>
    )
}

export default RecipeCard;