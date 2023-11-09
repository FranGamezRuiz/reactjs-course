import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'frangr7',
        name: 'Francisco Jesús Gámez Ruiz',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}