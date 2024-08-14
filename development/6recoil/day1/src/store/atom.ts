import { atom, atomFamily, selector, selectorFamily } from 'recoil'

const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export default countAtom

export const countSelector = selector({
    key: 'countSelector',
    get: ({ get }) => {
        const count = get(countAtom) // extract the current state value
        return count % 2 == 0 // write logic here to return something
        // accessed by `useRecoilValue(countSelector)`
    }
})

// <--------------------------------------------------------->


// async data queries
export const notificationAtom = atom({
    key: 'notificationAtom',
    default: selector({
        key: 'notificationSelector',
        get: async () => {
            const response = await fetch('https://sum-server.100xdevs.com/notifications')
            const data = await response.json()
            return data
        }
    })
})


export const totalNotificationCount = selector({
    key: 'totalNotificationCount',
    get: ({ get }) => {
        const notification = get(notificationAtom)
        return notification?.network + notification?.jobs + notification?.messaging + notification?.notifications
    }
})



// <--------------------------------------------------------->

//atomFamily -> used in dynamic data queries

export const getTodo = atomFamily({ // when same id called again then data comes from recoil cache not from api call
    key: 'getTodo',
    default: selectorFamily({
        key: "getTodoDefault",
        get: (id: number) => async () => {
            await new Promise(resolve => setTimeout(resolve, 2000))
            // throw new Error("Something went wrong")
            const response = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
            const data = await response.json()
            return data
        }
    })


})