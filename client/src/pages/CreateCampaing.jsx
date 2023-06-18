import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { money } from '../assets';
import { CustomButtom, FormField } from '../components';
import { checkIfImage } from '../utils';


const CreateCampaing = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

  const handleFormField = () => {
    setForm({...form, [fieldName]: ethers.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }; 

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loader...'}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-semibold sm:text-[25px] text-[18px] leading-[38px] text-white'>Start a Campaing</h1>
      </div>

      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
        <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName="Your Name"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormField('name', e)}

           />
          <FormField
            labelName="Campaing Title"
            placeholder="Title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormField('title', e)}
           />
        </div>
        <FormField
            labelName="Story"
            placeholder="Write your story"
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormField('description', e)}
           />
           {/* Banner */}
           <div className='flex w-full justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]'>
            <img src={money} alt='money' className='w-[40px] h-[40px] object-contain' />
            <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>You will gey 100% of the raised amount</h4>
           </div>
           <div className='flex flex-wrap gap-[40px]'>
          <FormField
            labelName="Goal"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormField('target', e)}

           />
          <FormField
            labelName="End Date"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormField('deadline', e)}
           />
          </div>
          <FormField
            labelName="Campaing image"
            placeholder="Place image Url of your campaing"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormField('image', e)}
           />
           {/* Submit button */}
           <div className='flex justify-center items-center mt-[40px]'>
          <CustomButtom
            btnType="submit"
            title={"Submit New Campaing"}
            styles="bg-[#1dc071]"
          />
         </div>
      </form>
    </div>
  )
}

export default CreateCampaing