import React,{ useState } from 'react'

const Home = () => {
    const [words, setWords] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        // useEffect = (() => {
        //     fetch('')
            
        // })

    }
    return (
			<div>
				<section>
					<h1 className=' text-2xl lg:text-6xl text-center mb-8'>
						Medical Dictionary
					</h1>
					<form onSubmit={handleSubmit}>
						<input
							type='search'
							name='search'
							id='search'
							placeholder='Search medical term or word'
							className='input-form'
							required
						/>
						<div className='flex justify-center items-center'>
							<input type='button' value='Search for word' className='btn' />
						</div>
					</form>
				</section>
			</div>
		);
}

export default Home
