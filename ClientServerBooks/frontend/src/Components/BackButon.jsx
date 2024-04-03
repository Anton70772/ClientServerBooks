import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButon = ({ destination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-1'>
            <BsArrowLeft className='text-2xl' />
        </Link>
    </div>
  )
}

export default BackButon