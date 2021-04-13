import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {add, subtract} from '../store/Contador/Contador.actions'

export function Contador() {
	const dispach = useDispatch()
	const result = useSelector(state => state.contador)

	return (
		<div >
			<button onClick={() => {dispach(add(result))}}>Add</button>
			<p>{result}</p>
			<button onClick={() => {dispach(subtract(result))}}>Subtract</button>
		</div>
	)
}
