import React from 'react'

const Projects = ({projectCoversRef}) => {
    
  return (
    <div className='overflow-x-scroll py-5'>
     <div className="mx-8 flex w-fit">

      <div className="project-cover mx-10 h-[370px] w-[290px] bg-black flip-container" ref={(el) => projectCoversRef.current[0] = el} style={{perspective: '1000px'}}>
        <div className="flipper">
          <div className="front box-cover flex items-center justify-center text-black bg-white h-[370px] w-full">
            {/* Content of the front side */}
            <div className="text-xl font-bold tracking-wider mt-2">Task-Manager</div>
          </div>
          <div className='back box-cover text-white relative  h-[370px] w-full'>
            {/*Content of the back side*/}
               <h3 className='text-center tracking-wide font-extrabold mt-4'>Task-Manager</h3>
               <p className='px-4 pt-7 '>Task-Manager is a work scheduling app which can schedule your works and gives you reminder notification on time.The very useful app for the busy workers.It also provides the dashboard to track your daily tasks.</p>
               <a href="https://superb-treacle-78dcf5.netlify.app" className='absolute bottom-4 left-4 cursor-pointer underline'>View Project</a>
            </div>
        </div>
      </div>

      <div className="project-cover mx-10 h-[370px] w-[290px] bg-black flip-container" ref={(el) => projectCoversRef.current[1] = el} style={{perspective: '1000px'}}>
        <div className="flipper">
          <div className="front box-cover flex items-center justify-center text-black bg-white h-[370px] w-full">
            {/* Content of the front side */}
            <div className="text-xl font-bold tracking-wider mt-2">Jaguar Cycles</div>
          </div>
          <div className=' back box-cover text-white relative h-[370px] w-full'>
             {/*Content of the back side*/}
               <h3 className='text-center tracking-wide font-extrabold mt-4'>Jaguar Cycles</h3>
               <p className='px-4 pt-7 '>Jaguar cycles is an e-commerce site which is selling cycles and the spare parts motor cycles and more.Customers can buy their favourite products through this app with the use of chat-bot in this site.Users can make online payments and get door delivery through this app.</p>
               <a href="" className='absolute bottom-4 left-4 cursor-pointer underline'>View Project</a>
            </div>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Projects