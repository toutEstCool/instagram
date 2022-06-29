document
	.querySelector('.player-chunk-prev').addEventListener('click', () => {
		moveClass('player-chunk-active', 'previousElementSibling')
		const el = moveClass('timeline-chunk-active', 'previousElementSibling')

		if (el) {
			el.querySelector('.timeline-chunk-inner').style.width = ''
		}
	})

document
	.querySelector('.player-chunk-next').addEventListener('click', nextElement)

function moveClass(className, method) {
		const active = document.querySelector(`.${className}`)
		next = active[method]

		if (next) {
			active.classList.remove(className)
			next.classList.add(className)
			return active
		} 
			return null
	}

function nextElement() {
	moveClass('player-chunk-active', 'nextElementSibling')
	const el = moveClass('timeline-chunk-active', 'nextElementSibling')

	if (el) {
		el.querySelector('.timeline-chunk-inner').style.width = ''
	}
}


const step = 1

setInterval(() => {
	const active = document
		.querySelector('.timeline-chunk-active')
		.querySelector('.timeline-chunk-inner')

	let w = parseFloat(active.style.width) || 0

	if (w === 100) {
		if (nextElement()) {
			active.style.width = ''
		}
		return
	}

	active.style.width = String(w + step) + '%'
}, (3 * 1000 * step) / 100)




