const API_KEY = "CkzgbYpuzYmKXrLwQt2ipSEzRAEkxNG8";

export async function fetchResource<ResultType>(url: string): Promise<ResultType> {
    url = url + "?api-key=" + API_KEY

    const response = await fetch(
        url, 
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8'
            }
        }
    )

    return await response.json() as ResultType;

    // const { data, errors } = await response.json()

    // if (response.ok) {
    //     const result = data?.
    // }
}