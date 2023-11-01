import SendIcon from '@mui/icons-material/Send';

const Input = () => {
    return (
        <div className="w-full flex flex-col items-center p-4">
            <div className='w-[50%] rounded text-white p-4 mb-1'>
                <div className='flex'>
                  <p className='bg-[#6c757d] p-2 rounded-lg ml-2 cursor-pointer hover:bg-[#5c636a]'>What is life's purpose?</p>
                  <p className='bg-[#6c757d] p-2 rounded-lg ml-2 cursor-pointer hover:bg-[#5c636a]'>How to attain peace?</p>
                  <p className='bg-[#6c757d] p-2 rounded-lg ml-2 cursor-pointer hover:bg-[#5c636a]'>What is the path to enlightenment?</p>
                </div>
                <div className='flex mt-1'>
                <p className='bg-[#6c757d] p-2 rounded-lg ml-2 cursor-pointer hover:bg-[#5c636a]'>How to stay positive?</p>
                <p className='bg-[#6c757d] p-2 rounded-lg ml-2 cursor-pointer hover:bg-[#5c636a]'>Please explain Chapter 12 Verse 13.</p>
                <p className='bg-[#6c757d] p-2 rounded-lg ml-2 cursor-pointer hover:bg-[#5c636a]'>What is Karma Yoga?</p>
                </div>
            </div>

                <div className=" w-[50%] flex items-center relative">
                  <input type="text"
                    placeholder="Ask Krishna a question..." 
                    className=" bg-[#333333] p-3 w-full outline-none text-white rounded-md"
                  />
                  <div className='text-[#aba9a9] hover:bg-[#d3d2d218] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer absolute right-2'>
                    <SendIcon/>
                   </div>
                  
                 </div>
        </div>
    );
}

export default Input;