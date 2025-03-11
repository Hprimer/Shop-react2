import React from 'react'

import './Registration.css'

function Registration() {
	return ( 
		<div className='register_page'>
			{/* <h1 className='logo'>Happy House</h1> */}
			<div className='registr'>
				<h2>Добро пожаловать</h2>
			<form action="" method="get">
				
					{/* <label for="name">Введите имя:</label> */}
					<div className='col'>
						<input type="text" placeholder="name" id="name" required/>
					</div>
				
				<div className='col'>
					{/* <label for="email">Введите email:</label> */}
					<input type="email" placeholder="email" id="email" required/>
				</div>
				<button className="reg_btn" type="submit">Вход</button>
			</form>
			</div>
			
		</div>
	)
}

export default Registration
