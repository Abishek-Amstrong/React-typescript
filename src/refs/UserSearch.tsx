import { useState, useRef, useEffect } from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Michel', age: 20},
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState('');
    const [user, setUser] = useState<undefined | {name: string, age: number}>();

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, [])

    const searchUser = () => {
        const foundUser = users.find(user => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return <div>
        User Search
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={searchUser}>Find User</button>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
    </div>
};

export default UserSearch;