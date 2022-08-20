import { NodeCG } from '../../types/nodecg'

export default (nodecg: NodeCG) => {
	const hitlist = nodecg.Replicant('hitlist')
	const goals = nodecg.Replicant<string[]>('goals')

	goals.value = ['axel', 'demyx', 'drives', 'larxene', 'lexaeus', 'lingering-will', 'luxord', 'marluxia', 'pooh', 'roxas', 'saix', 'sephiroth', 'vexen', 'xaldin', 'xemnas', 'xigbar', 'zexion']

	hitlist.value = ['axel', 'demyx']
}
