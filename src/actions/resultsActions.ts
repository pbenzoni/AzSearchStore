export type ResultsAction =
    {
        type: "INITIATE_SEARCH",
    } |
    {
        type: "RECEIVE_RESULTS" | "APPEND_RESULTS",
        results: {}[],
        receivedAt: number
    } |
    {
        type: "HANDLE_ERROR",
        error: string
    };

export const initiateSearch = (): ResultsAction => ({
    type: "INITIATE_SEARCH"
});

export const recieveResults = (results: {}[], receivedAt: number): ResultsAction => ({
    type: "RECEIVE_RESULTS",
    results,
    receivedAt
});

export const appendResults = (results: {}[], receivedAt: number): ResultsAction => ({
    type: "APPEND_RESULTS",
    results,
    receivedAt
});

export const handleSearchError = (error: string): ResultsAction => ({
    type: "HANDLE_ERROR",
    error
});