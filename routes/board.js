const express = require('express')
const router = express.Router()
const Board = require('../schemas/Board')

router.get('/create', async (req, res, next) => {
	try {
		const list = new Board({
			title: '아버지를 아버지라...',
			writer: '홍길동',
			content: '아버지를 아버지라... 형을 형이라...'
		})
		const result = await list.save()
		res.json(result)
	}
	catch(e) {
		next(e)
	}
})

router.get('/list', async (req, res, next) => {
	try {
		const result = await Board.find()
		res.json(result)
	}
	catch(e) {
		next(e)
	}
})

module.exports = router