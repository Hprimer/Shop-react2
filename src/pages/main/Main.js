import React from 'react'
import Presentation from '../../Components/Presentation/Presentation'
import Categories from '../../Components/Categories/Categories'
import Items from '../../Components/Items/Items'

function Main({onChoose, items, onAdd}) {
	return (
		<>
			<Presentation/>
      <div className='categ_items container'>
        <Categories onChoose={onChoose} />
        <Items items={items} onAdd={onAdd} />
      </div>
		</>
	)
}

export default Main
