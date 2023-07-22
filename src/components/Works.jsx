import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'
import { projects } from '../constants'
import { github } from '../assets'

const ProjectCard = ({ index, name, description, tags, image, source_ciide_link, project }) => {

  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index + 1 * 0.5, 0.75)}>
        <Tilt
          options={
            {
              max: 45,
              scale: 1,
              speed: 450
            }
          }
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt={name}
              className='w-full h-full object-cover rounded-2xl '
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt="github"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </Tilt>
      </motion.div>

    </>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex flex-col'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className=' mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ratione excepturi a atque perferendis molestiae, laborum nesciunt veniam, nemo quisquam adipisci cupiditate laudantium velit necessitatibus eaque deserunt voluptatibus! Doloremque, facere!
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              image={project.image}
              tags={project.tags}
              project={{ ...project }}
            />
          ))

          }
        </div>
      </div>
    </>

  )
}

export default SectionWrapper(Works, '')