import React, { useEffect, useState } from 'react';

const people = [
    {
        id: 1,
        name: "Bob",
        friendIds: [2, 3]
    },
    {
        id: 2,
        name: "Rick",
        friendIds: [1, 3]
    },
    {
        id: 3,
        name: "Kate",
        friendIds: [2, 1, 4]
    },
    {
        id: 4,
        name: "Archie",
        friendIds: [3]
    }
]

const ListOfFriends = ({ allUsers, currentUserId, showTitle }) => {
    console.log('Friends calculated');
    const friends = allUsers.filter((user) => {
        return user.friendIds.includes(currentUserId)
    });

    return (
        <div>
            {showTitle && <h2>My friends</h2>}
            {friends.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )
}

export const App = () => {
    const [showTitle, setShowTitle] = useState(true);

    const handleClick = () => {
        setShowTitle(false);
    }

    return (
        <div>
            <button onClick={handleClick}>Hide title</button>
            <ListOfFriends showTitle={showTitle} allUsers={people} currentUserId={1} />
        </div>
    )
}
