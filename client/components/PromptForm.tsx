import React from 'react'
import IconArrow from '@/icons/IconArrow'

type PromptForm = {
    input: string;
    handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const PromptForm: React.FC<PromptForm> = ({ input, handleInput, handleSubmit }) => {
  return (
    <div id="prompt-container" className="mb-12 w-full flex justify-center">
        <form 
            id="prompt-bar" 
            className="bg-light-green px-6 py-4 w-3/5 flex justify-between items-center rounded-2xl"
            onSubmit={handleSubmit}
        >
        <textarea 
            name="prompt" 
            id="prompt-block"
            value={input}
            onChange={handleInput}
            className="bg-transparent w-full min-h-[16px] max-h-[200px] h-6 outline-none resize-none"
            placeholder="Enter a prompt ..."
        ></textarea>
        <button 
            id="submit-btn"
            type="submit"
            className="h-4 w-4"
        >
            <IconArrow />
        </button>
        </form>
    </div>
  )
}

export default PromptForm
