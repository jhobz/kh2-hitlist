const hitlistR = nodecg.Replicant<string[]>('hitlist')
const transitionTimeR = nodecg.Replicant<number>('transitionTime')
const allTargets = nodecg.Replicant<string[]>('goals')

hitlistR.on('change', (newValue) => {
    document.getElementById('hitlist').innerText = newValue.join(', ').replace('-', ' ')
})

document.getElementById('genBtn').onclick = (ev) => {
    const size = parseInt((document.getElementById('size') as HTMLInputElement).value)
    const transitionTime = parseInt((document.getElementById('transition') as HTMLInputElement).value)

    transitionTimeR.value = transitionTime

    let selection = [...allTargets.value]
    selection.sort(() => 0.5 - Math.random())
    selection = selection.slice(0, size)

    hitlistR.value = selection
}