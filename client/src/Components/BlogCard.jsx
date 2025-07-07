import { FaRegComment , FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const BlogCard = ({ id,title,description,tag,img,datePosted,readingTime,comments,chef })=>{
    return (
        <article className={`border-1 group border-[#e5e7eb] rounded-2xl w-[24rem] hover:shadow-md transition-transform transition-discrete hover:-translate-y-1 cursor-pointer max-sm:w-full ${id === 1 ? 'md:col-span-2 md:w-full' : ""}`}  key={id}>
            <section className="relative overflow-hidden rounded-t-2xl">
                <img src={img} alt={title} className="h-60 object-cover rounded-t-2xl w-full transition-transform transition-discrete group-hover:scale-105" />
                <p className="w-max absolute top-4 left-4 bg-green-500 text-white py-1 px-2.5 rounded-full font-medium text-sm">{tag}</p>
            </section>
            <section className="p-5 flex flex-col gap-4 justify-center">
                <section className="flex justify-between items-center md:w-xs">
                    <p className="flex items-center max-sm:text-sm"><SlCalender className="mr-2"/>{datePosted}</p>
                    <p className="max-sm:text-sm">{readingTime}</p>
                    <p className="flex items-center max-sm:text-sm"><FaRegComment className="mr-2"/>{comments}</p>
                </section>
                <h3 className='font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors text-2xl lg:text-3xl font-secondary'>{title}</h3>
                <p className='text-grey-600 mb-6 text-lg'>{description}</p>
                <section className='flex items-center justify-between'>
                    <section className='flex items-center space-x-3'>
                        <img src={chef.image} alt={chef.name} className="h-10 w-10 rounded-full object-cover"/>
                        <p className="font-medium text-gray-900 max-sm:text-[0.8rem]">{chef.name}</p>
                    </section>
                    <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors group/btn cursor-pointer max-sm:text-sm">
                        Read More
                        <FaArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform transition-discrete" fontWeight={100}/>
                    </button>
                </section>
            </section>
        </article>
    )
}

export default BlogCard;