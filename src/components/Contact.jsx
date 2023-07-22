
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../utils/motion'
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // public key 
    // gpVKTsILHymS2_0_L
    // service_5z6sys7
    // template_tncdbti

    emailjs.send(
      'service_5z6sys7',
      'template_tncdbti',
      {
        from_name: form.name,
        to_name: 'Julio Cesar',
        from_email: form.email,
        to_email: 'contact@jsmastery.pro',
        message: form.message,
      },
      'gpVKTsILHymS2_0_L'
    ).then(() => {
      setLoading(false);
      alert(' Message sent successfully! ')
    })
    setForm({
      name: '',
      email: '',
      message: ''
    }, (error) =>{
      setLoading(false);
      console.log(error);
      alert('Something went wrong')
    }
    )
      ;

  }



  return (
    <div className='xl:mt-12 xl:flex-row  flex-col-revers flex gap-10 overflow-hidden items-center justify-center'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex flex-col items-center bg-black-100 p-8 rounded-xl xl:w-[60%] w-full'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>

        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>

        <form
          action=""
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col items-center gap-10'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Email:
            </span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's Your Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Name:
            </span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's Your Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Message:
            </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's Your Message"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending' : 'Send'}

          </button>

        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className=' xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');