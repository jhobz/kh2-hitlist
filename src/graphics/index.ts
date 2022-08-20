const hitlist = nodecg.Replicant<string[]>('hitlist')
const transitionTime = nodecg.Replicant<number>('transitionTime')

const toggleDone: EventListener = (ev) => {
    (ev.target as HTMLElement).classList.toggle('done')
}

hitlist.on('change', (newValue, oldValue) => {
    document.querySelectorAll('.item').forEach((item) => {
        item.classList.remove('show', 'done')
        item.classList.add('hide')
        item.removeEventListener('click', toggleDone)
    })

    newValue.forEach((boss, index) => {
        const item = document.getElementById(boss)
        item.classList.remove('hide')
        item.addEventListener('click', toggleDone)

        setTimeout(() => {
            item.classList.add('show')
        }, transitionTime.value * (index + 1))
    })
})