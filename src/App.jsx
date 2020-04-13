import { Client } from 'boardgame.io/react'
import publicIp from 'public-ip'
import React, { useState, useEffect } from 'react'
import { Local, SocketIO } from 'boardgame.io/multiplayer'
import shortid from 'shortid'

import { Config } from './logic/config'
import { TichuTable } from './ui/TichuTable'
import { Tichu } from './logic/game'
import { db } from './logic/firebase'


const TichuClient = Client({
	game: Tichu,
	numPlayers: 4,
	board: TichuTable,
	multiplayer: Config.useLocalMultiplayer? Local() : SocketIO({server: 'https://tichu-game-server.herokuapp.com'}),
})

export const App = () => {
	const [id, setId] = useState(0)
	const [sid, setSid] = useState(undefined)
	const [roomReady, setRoomReady] = useState(false)
	const [enteredSid, setEnteredSid] = useState('')



	const generate = async () =>  {
		setRoomReady(false)
		const s = shortid.generate()
		setSid(s)

		const ip4 = await publicIp.v4()
		const ip6 = await publicIp.v6()
		await db.collection('ids').doc(s).set({ ip4, ip6 })
	setRoomReady(true)
	}

	const connect = () => {
	}

	useEffect(() => {
		// get
		// const docRef = db.collection('ids').doc('yhVNLoJOkIQ4Utt2ojDi')
		// docRef.get().then(doc => {
		// 	if (!doc.exists) {
		// 		setSid('Does not exist')
		// 		return
		// 	}
		// 	const { ip } = doc.data()
		// 	setSid(ip)
		// })
	}, [])

	if (Config.debugLocalMultiplayer) {
		return (
			<div>
				<button onClick={() => generate()}>Generate shortid</button>
				<p>{sid} {roomReady ? 'ready' : 'working'}</p>
				<input value={enteredSid} onChange={e => setEnteredSid(e.target.value)} />
				<button onClick={() => connect()}>Connect shortid</button>

				<button onClick={() => setId(0)}>Be Player 0</button>
				<button onClick={() => setId(1)}>Be Player 1</button>
				<button onClick={() => setId(2)}>Be Player 2</button>
				<button onClick={() => setId(3)}>Be Player 3</button>
				<TichuClient playerID='0' />
				<TichuClient playerID='1' />
				<TichuClient playerID='2' />
				<TichuClient playerID='3' />
			</div>
		)
	}

	return (
		<div>
			<button onClick={() => generate()}>Generate shortid</button>
			<p>{sid} {roomReady ? 'ready' : 'working'}</p>
			<button onClick={() => setId(0)}>Be Player 0</button>
			<button onClick={() => setId(1)}>Be Player 1</button>
			<button onClick={() => setId(2)}>Be Player 2</button>
			<button onClick={() => setId(3)}>Be Player 3</button>
			{id === 0 && <TichuClient playerID='0' />}
			{id === 1 && <TichuClient playerID='1' />}
			{id === 2 && <TichuClient playerID='2' />}
			{ id === 3 && <TichuClient playerID='3' />}
		</div>
	)}

	// unneeded comment
