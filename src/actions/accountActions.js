export const DEPOSIT = 'DEPOSIT'
export const WITHDRAW = 'WITHDRAW'

export const deposit = sum => ({
    type: DEPOSIT,
    payload: sum
})

export const withDraw = sum => ({
    type: WITHDRAW,
    payload: sum
})