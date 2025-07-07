import BlogCard from "../../Components/BlogCard";

const BlogSection = ()=>{

    const Blogs = [{
      id:1,
      title:'The Ultimate Guide to Knife Skills Every Home Cook Needs',
      description:'Master the fundamental knife techniques that will transform your cooking and make meal prep faster, safer, and more enjoyable.',
      tag:'Techniques',
      img:'https://images.pexels.com/photos/5677723/pexels-photo-5677723.jpeg',
      datePosted:'Dec 15, 2024',
      readingTime:'8 min read',
      comments:23,
      chef:{
        name:'Chef David Wilson',
        image:'https://xsgames.co/randomusers/avatar.php?g=male'
      }
    },{
       id:2,
      title:'The Ultimate Guide to Knife Skills Every Home Cook Needs',
      description:'Master the fundamental knife techniques that will transform your cooking and make meal prep faster, safer, and more enjoyable.',
      tag:'Techniques',
      img:'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg',
      datePosted:'Dec 15, 2024',
      readingTime:'8 min read',
      comments:23,
      chef:{
        name:'Chef David Wilson',
        image:'https://xsgames.co/randomusers/avatar.php?g=male'
      } 
    },{
        id:3,
      title:'The Ultimate Guide to Knife Skills Every Home Cook Needs',
      description:'Master the fundamental knife techniques that will transform your cooking and make meal prep faster, safer, and more enjoyable.',
      tag:'Techniques',
      img:'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg',
      datePosted:'Dec 15, 2024',
      readingTime:'8 min read',
      comments:23,
      chef:{
        name:'Chef David Wilson',
        image:'https://xsgames.co/randomusers/avatar.php?g=male'
      }
    }]

    return (
        <section className="px-[3%] py-[5%] flex flex-col items-center gap-4 font-secondary">
            <h1 className="text-3xl font-black text-center max-sm:w-[70%]">Featured Blog Posts</h1>
            <p className="text-xl font-normal text-[#555] text-center max-md:w-[50%] max-sm:w-[60%] max-sm:text-sm">Learn from expert chefs and food enthusiasts with our curated culinary content</p>
            <section className="grid grid-cols-1 gap-8 p-4 justify-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {
                    Blogs.map(blog=>(
                        <BlogCard 
                            id={blog.id}
                            title={blog.title}
                            description={blog.description}
                            tag={blog.tag}
                            img={blog.img}
                            datePosted={blog.datePosted}
                            readingTime={blog.readingTime}
                            comments={blog.comments}
                            chef={blog.chef}
                        />
                    ))
                }
            </section>
        </section>
    )
}

export default BlogSection;