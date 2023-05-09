import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuoter } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const { quote, author } = !!data && data[0];

    return (
        <>
            <h1> BreakingBad quotes </h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuoter isLoading={isLoading} />
                    : <Quote quote={quote} author={author} />
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={() => increment(1)} >
                Next quote
            </button>

        </>
    )
}
