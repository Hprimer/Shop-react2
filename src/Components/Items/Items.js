import React from 'react'
import Item from '../Item/Item'

import './items.css'

function Items({items, onAdd}) {
	return (
		<main className='container'>
			<div className='items row'>
				{items.map(el => (
					<Item key = {el.id} item = {el} onAdd = {onAdd}/> 
				))}
			</div>
		</main>
	)
}

export default Items
