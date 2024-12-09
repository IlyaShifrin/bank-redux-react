export const PUT_QUOTE = 'PUT_QUOTE'

export const putQuote = quote => {
    return {
        type: `PUT_QUOTE`,
        payload: quote
    }
}

export const fetchQuote = () => {
    return dispatch => {
        dispatch(putQuote('Pending...'));
        fetch('https://api.gameofthronesquotes.xyz/v1/random ')
            .then(res => res.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(() => putQuote('Failed to fetch quote data'));

    }
}